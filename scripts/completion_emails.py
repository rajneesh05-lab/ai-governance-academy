#!/usr/bin/env python3
"""Email a completion certificate and module scores to learners who finished their role path."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import os
import pathlib
import smtplib
import ssl
import subprocess
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from email.message import EmailMessage

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE_NAME = "AI Governance Academy"


@dataclass
class Completion:
    user_id: str
    name: str
    email: str
    role_id: str
    role_name: str
    modules: list[tuple[str, int]]  # (title, best score)
    certificate_id: str
    issued: datetime

    @property
    def average(self) -> int:
        return round(sum(score for _, score in self.modules) / len(self.modules))


def load_paths() -> dict:
    """Read each role's learning path from the course content (requires Node.js)."""
    output = subprocess.check_output(["node", str(ROOT / "scripts" / "export_paths.js")], cwd=ROOT)
    return json.loads(output)


def certificate_id(user_id: str, role_id: str) -> str:
    return "AIGA-" + hashlib.sha256(f"{user_id}:{role_id}".encode()).hexdigest()[:10].upper()


def find_completion(learner: dict, paths: dict, issued: datetime) -> Completion | None:
    """Return the learner's completion if every module in their role's path is passed."""
    raw_role = learner.get("work_role") or ""
    role_id = raw_role if any(r["id"] == raw_role for r in paths["roles"]) else paths["legacyRoles"].get(raw_role)
    role = next((r for r in paths["roles"] if r["id"] == role_id), None)
    if not role:
        return None
    completed = set(learner.get("completed_modules") or [])
    if not all(m["id"] in completed for m in role["modules"]):
        return None
    scores = learner.get("scores") or {}
    return Completion(
        user_id=learner["user_id"],
        name=(learner.get("full_name") or "").strip() or learner["email"],
        email=learner["email"],
        role_id=role["id"],
        role_name=role["name"],
        modules=[(m["title"], int(round(float(scores.get(m["id"], 0))))) for m in role["modules"]],
        certificate_id=certificate_id(learner["user_id"], role["id"]),
        issued=issued,
    )


# --- Certificate PDF -------------------------------------------------------
# A small, dependency-free PDF writer using the built-in Helvetica fonts.

_HELVETICA_WIDTHS = dict(zip(
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    [278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278]
    + [556] * 10
    + [278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833,
       722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556,
       556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556,
       500, 722, 500, 500, 500, 334, 260, 334, 584],
))


def _text_width(text: str, size: float, bold: bool = False) -> float:
    width = sum(_HELVETICA_WIDTHS.get(ch, 556) for ch in text) * size / 1000
    return width * 1.06 if bold else width


def _pdf_string(text: str) -> bytes:
    raw = text.encode("cp1252", errors="replace")
    return b"(" + raw.replace(b"\\", b"\\\\").replace(b"(", b"\\(").replace(b")", b"\\)") + b")"


def _fit(text: str, size: float, max_width: float, bold: bool = False) -> float:
    while size > 8 and _text_width(text, size, bold) > max_width:
        size -= 1
    return size


def certificate_pdf(c: Completion) -> bytes:
    width, height = 842, 595  # A4 landscape, in points
    ops: list[bytes] = []

    def centered(text: str, y: float, size: float, bold: bool = False, colour: str = "0.13 0.17 0.23") -> None:
        size = _fit(text, size, width - 160, bold)
        x = (width - _text_width(text, size, bold)) / 2
        font = b"/F2" if bold else b"/F1"
        ops.append(f"{colour} rg BT ".encode() + font + f" {size} Tf {x:.1f} {y:.1f} Td ".encode()
                   + _pdf_string(text) + b" Tj ET")

    gold = "0.74 0.55 0.18"
    ops.append(f"{gold} RG 3 w 24 24 {width - 48} {height - 48} re S".encode())
    ops.append(f"{gold} RG 0.8 w 36 36 {width - 72} {height - 72} re S".encode())
    centered(SITE_NAME.upper(), 500, 13, bold=True, colour=gold)
    centered("Certificate of Completion", 445, 38, bold=True)
    centered("This certifies that", 400, 15, colour="0.41 0.45 0.53")
    centered(c.name, 350, 34, bold=True, colour="0.55 0.40 0.12")
    centered("has completed the", 312, 15, colour="0.41 0.45 0.53")
    centered(f"{c.role_name} learning path", 275, 24, bold=True)
    centered(f"{len(c.modules)} modules  |  average best score {c.average}%", 240, 14)
    ops.append(f"{gold} RG 0.8 w {width / 2 - 120} 200 m {width / 2 + 120} 200 l S".encode())
    centered(f"Issued {c.issued.strftime('%d %B %Y').lstrip('0')}  |  Certificate ID {c.certificate_id}", 170, 12,
             colour="0.41 0.45 0.53")
    centered("Module scores are listed in the accompanying email.", 80, 10, colour="0.41 0.45 0.53")
    content = b"\n".join(ops)

    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {width} {height}] "
        f"/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>".encode(),
        f"<< /Length {len(content)} >>\nstream\n".encode() + content + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    ]
    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for number, body in enumerate(objects, start=1):
        offsets.append(len(out))
        out += f"{number} 0 obj\n".encode() + body + b"\nendobj\n"
    xref = len(out)
    out += f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode()
    out += b"".join(f"{offset:010d} 00000 n \n".encode() for offset in offsets)
    out += f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
    return bytes(out)


# --- Email -----------------------------------------------------------------

def build_email(c: Completion, sender: str, academy_url: str) -> EmailMessage:
    message = EmailMessage()
    message["Subject"] = f"Your {SITE_NAME} certificate: {c.role_name} path"
    message["From"] = sender
    message["To"] = c.email
    first = c.name.split()[0] if c.name and "@" not in c.name else "there"
    score_lines = "\n".join(f"  {score:>3}%  {title}" for title, score in c.modules)
    message.set_content(
        f"Hi {first},\n\n"
        f"Congratulations on completing the {c.role_name} learning path in the {SITE_NAME}.\n\n"
        f"Your best score in each module:\n{score_lines}\n\n"
        f"Average: {c.average}%\nCertificate ID: {c.certificate_id}\n\n"
        f"Your certificate is attached as a PDF. You can also view it any time in the academy:\n{academy_url}\n"
    )
    rows = "".join(
        f"<tr><td style='padding:6px 12px;border-bottom:1px solid #e6e1d5'>{html.escape(title)}</td>"
        f"<td style='padding:6px 12px;border-bottom:1px solid #e6e1d5;text-align:right;font-weight:bold'>{score}%</td></tr>"
        for title, score in c.modules
    )
    message.add_alternative(
        "<div style='font-family:Arial,sans-serif;color:#202b3a;max-width:620px'>"
        f"<p>Hi {html.escape(first)},</p>"
        f"<p>Congratulations on completing the <b>{html.escape(c.role_name)}</b> learning path in the {SITE_NAME}.</p>"
        "<p>Your best score in each module:</p>"
        f"<table style='border-collapse:collapse;width:100%'>{rows}"
        f"<tr><td style='padding:8px 12px'><b>Average</b></td><td style='padding:8px 12px;text-align:right'><b>{c.average}%</b></td></tr></table>"
        f"<p>Certificate ID: <b>{c.certificate_id}</b><br>Your certificate is attached as a PDF. "
        f"You can also view it any time in <a href='{html.escape(academy_url)}'>the academy</a>.</p></div>",
        subtype="html",
    )
    slug = c.role_id.replace("_", "-")
    message.add_attachment(certificate_pdf(c), maintype="application", subtype="pdf",
                           filename=f"ai-governance-academy-certificate-{slug}.pdf")
    return message


def smtp_connection() -> smtplib.SMTP:
    host = os.environ["NEWS_SMTP_HOST"]
    port = int(os.environ.get("NEWS_SMTP_PORT", "587"))
    context = ssl.create_default_context()
    if port == 465:
        connection = smtplib.SMTP_SSL(host, port, context=context, timeout=30)
    else:
        connection = smtplib.SMTP(host, port, timeout=30)
        connection.starttls(context=context)
    connection.login(os.environ["NEWS_SMTP_USERNAME"], os.environ["NEWS_SMTP_PASSWORD"])
    return connection


# --- Supabase --------------------------------------------------------------

class Supabase:
    def __init__(self, url: str, key: str) -> None:
        self.url = url.rstrip("/")
        self.key = key

    def request(self, method: str, path: str, body: object | None = None, prefer: str | None = None) -> object:
        headers = {"apikey": self.key, "Authorization": f"Bearer {self.key}", "Content-Type": "application/json"}
        if prefer:
            headers["Prefer"] = prefer
        data = json.dumps(body).encode() if body is not None else None
        request = urllib.request.Request(f"{self.url}{path}", data=data, headers=headers, method=method)
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                text = response.read().decode()
        except urllib.error.HTTPError as exc:
            raise RuntimeError(f"Supabase {method} {path.split('?')[0]} failed with HTTP {exc.code}") from exc
        return json.loads(text) if text else None

    def candidates(self) -> list[dict]:
        return self.request("POST", "/rest/v1/rpc/learners_for_certificates", {}) or []

    def existing_certificate(self, user_id: str, role_id: str) -> dict | None:
        rows = self.request("GET", f"/rest/v1/certificates?user_id=eq.{user_id}&work_role=eq.{role_id}&select=*")
        return rows[0] if rows else None

    def issue(self, c: Completion) -> None:
        self.request("POST", "/rest/v1/certificates?on_conflict=user_id,work_role",
                     {"user_id": c.user_id, "work_role": c.role_id, "certificate_id": c.certificate_id,
                      "average_score": c.average, "issued_at": c.issued.isoformat()},
                     prefer="resolution=ignore-duplicates,return=minimal")

    def mark_emailed(self, c: Completion) -> None:
        self.request("PATCH", f"/rest/v1/certificates?user_id=eq.{c.user_id}&work_role=eq.{c.role_id}",
                     {"emailed_at": datetime.now(timezone.utc).isoformat()}, prefer="return=minimal")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--preview", metavar="DIR", help="write a sample email and certificate to DIR without sending")
    args = parser.parse_args()
    paths = load_paths()
    academy_url = os.environ.get("ACADEMY_URL") or "https://rajneesh05-lab.github.io/ai-governance-academy/"

    if args.preview:
        role = paths["roles"][0]
        sample = find_completion({"user_id": "00000000-0000-0000-0000-000000000000", "full_name": "Sample Learner",
                                  "email": "learner@example.com", "work_role": role["id"],
                                  "completed_modules": [m["id"] for m in role["modules"]],
                                  "scores": {m["id"]: 80 + i * 3 for i, m in enumerate(role["modules"])}},
                                 paths, datetime.now(timezone.utc))
        out = pathlib.Path(args.preview)
        out.mkdir(parents=True, exist_ok=True)
        message = build_email(sample, "academy@example.com", academy_url)
        (out / "certificate-preview.pdf").write_bytes(certificate_pdf(sample))
        (out / "completion-email-preview.eml").write_bytes(bytes(message))
        print(f"Wrote preview files to {out}")
        return 0

    db = Supabase(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_ROLE_KEY"])
    sender = os.environ.get("NEWSLETTER_FROM") or os.environ["NEWS_SMTP_USERNAME"]
    pending = []
    for learner in db.candidates():
        completion = find_completion(learner, paths, datetime.now(timezone.utc))
        if not completion:
            continue
        existing = db.existing_certificate(completion.user_id, completion.role_id)
        if existing and existing.get("emailed_at"):
            continue
        if existing:
            completion.issued = datetime.fromisoformat(existing["issued_at"])
        pending.append(completion)
    if not pending:
        print("No new completions to email.")
        return 0
    with smtp_connection() as connection:
        for completion in pending:
            db.issue(completion)
            connection.send_message(build_email(completion, sender, academy_url))
            db.mark_emailed(completion)
            print("Sent one completion certificate.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (KeyError, ValueError, RuntimeError, OSError, smtplib.SMTPException, subprocess.CalledProcessError) as exc:
        print(f"Completion emails failed: {type(exc).__name__}: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc
