#!/usr/bin/env python3
"""Build and send an evidence-linked AI and automation email digest."""

from __future__ import annotations

import argparse
import email.utils
import html
import json
import os
import re
import smtplib
import ssl
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from email.message import EmailMessage
from html.parser import HTMLParser
from typing import Iterable


FEEDS = (
    ("UiPath", "https://www.uipath.com/blog/rss.xml"),
    ("Microsoft AI", "https://blogs.microsoft.com/ai/feed/"),
    ("OpenAI", "https://openai.com/news/rss.xml"),
    ("Google AI", "https://blog.google/technology/ai/rss/"),
)
MAX_ITEMS = 8
MAX_MONTHLY_ITEMS = 40
USER_AGENT = "AI-Governance-Academy-Newsletter/1.0 (+https://github.com/rajneesh05-lab/ai-governance-academy)"
ACRONYMS = {
    "AI": "Artificial Intelligence",
    "AGI": "Artificial General Intelligence",
    "API": "Application Programming Interface",
    "APIs": "Application Programming Interfaces",
    "BI": "Business Intelligence",
    "CI": "Continuous Integration",
    "CV": "Computer Vision",
    "GenAI": "Generative Artificial Intelligence",
    "LLM": "Large Language Model",
    "LLMs": "Large Language Models",
    "ML": "Machine Learning",
    "MLOps": "Machine Learning Operations",
    "NLP": "Natural Language Processing",
    "OCR": "Optical Character Recognition",
    "PM": "Project Manager",
    "QA": "Quality Assurance",
    "RAG": "Retrieval-Augmented Generation",
    "RPA": "Robotic Process Automation",
    "SaaS": "Software as a Service",
    "SDK": "Software Development Kit",
    "VAR": "Video Assistant Referee",
}
ACRONYM_PATTERN = re.compile(r"\b(?:[A-Z][A-Z0-9&+-]{1,9}|GenAI|MLOps)s?\b")
SPACE_PATTERN = re.compile(r"\s+")
RELEVANCE_TERMS = (
    "artificial intelligence", "agent", "robotic process",
    "automation", "machine learning", "language model", "generative",
    "computer vision", "deep learning", "neural network",
)


class _TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)


def clean_text(value: str | None) -> str:
    parser = _TextExtractor()
    parser.feed(html.unescape(value or ""))
    parser.close()
    return SPACE_PATTERN.sub(" ", " ".join(parser.parts)).strip()


def parse_date(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        return (parsed or datetime.now(timezone.utc)).astimezone(timezone.utc)
    except (TypeError, ValueError, OverflowError):
        return None


@dataclass(frozen=True)
class NewsItem:
    source: str
    title: str
    summary: str
    url: str
    published: datetime


def parse_feed(source: str, xml: bytes) -> list[NewsItem]:
    root = ET.fromstring(xml)
    items: list[NewsItem] = []
    for node in root.findall(".//item"):
        title = clean_text(node.findtext("title"))
        url = (node.findtext("link") or "").strip()
        published = parse_date(node.findtext("pubDate"))
        summary = clean_text(
            node.findtext("description")
            or node.findtext("{http://purl.org/rss/1.0/modules/content/}encoded")
        )
        if title and url.startswith(("https://", "http://")) and published:
            items.append(NewsItem(source, title, summary, url, published))
    return items


def fetch_feed(source: str, url: str) -> list[NewsItem]:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/xml, text/xml"},
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        if response.status != 200:
            raise RuntimeError(f"{source} feed returned HTTP {response.status}")
        return parse_feed(source, response.read(2_000_000))


def previous_month(today: date) -> tuple[date, date]:
    first_this_month = today.replace(day=1)
    last_previous_month = first_this_month - timedelta(days=1)
    return last_previous_month.replace(day=1), last_previous_month


def theme_for(item: NewsItem) -> str:
    text = f"{item.title} {item.summary}".lower()
    if any(term in text for term in ("agentic", "agent", "autonomous")):
        return "Agentic AI"
    if any(term in text for term in ("rpa", "robotic process", "automation")):
        return "RPA and automation"
    if any(term in text for term in ("safety", "governance", "responsible", "security")):
        return "AI governance and safety"
    return "AI models and applications"


def is_relevant(item: NewsItem) -> bool:
    text = f"{item.title} {item.summary}"
    return bool(
        re.search(r"\b(?:AI|RPA|LLMs?)\b", text, flags=re.IGNORECASE)
        or any(term in text.lower() for term in RELEVANCE_TERMS)
    )


def collect_news(period: str, today: date) -> list[NewsItem]:
    if period == "monthly":
        start, end = previous_month(today)
    else:
        end = today
        start = end - timedelta(days=7)

    articles: list[NewsItem] = []
    errors: list[str] = []
    for source, url in FEEDS:
        try:
            articles.extend(fetch_feed(source, url))
        except (OSError, TimeoutError, ET.ParseError, urllib.error.URLError, RuntimeError) as exc:
            errors.append(f"{source}: {exc}")

    if errors:
        print("Feed warnings: " + " | ".join(errors), file=sys.stderr)
    if not articles and errors:
        raise RuntimeError("No configured news feeds could be read.")

    selected = [
        item for item in articles
        if start <= item.published.date() <= end
        and is_relevant(item)
    ]
    selected.sort(key=lambda item: item.published, reverse=True)
    unique: list[NewsItem] = []
    seen_urls: set[str] = set()
    for item in selected:
        if item.url not in seen_urls:
            seen_urls.add(item.url)
            unique.append(item)
    return unique[:MAX_MONTHLY_ITEMS if period == "monthly" else MAX_ITEMS]


def work_guidance(item: NewsItem) -> tuple[str, str]:
    text = f"{item.title} {item.summary}".lower()
    if any(term in text for term in ("agentic", "agent", "autonomous")):
        return (
            "This may affect how teams delegate multi-step work to software. Treat autonomy and "
            "human oversight as design choices, not assumptions; confirm what the system can access "
            "and what actions require approval.",
            "Choose a low-risk, reversible task. Test the agent with representative cases, require "
            "human approval before external or high-impact actions, and record errors and handoffs.",
        )
    if any(term in text for term in ("rpa", "robotic process", "automation")):
        return (
            "The change may alter repetitive process work, exception handling, or handoffs between "
            "people and software. Check how exceptions, access, and audit evidence are handled.",
            "Map one stable, repetitive workflow; measure time and exception rates first. Pilot the "
            "automation with a named owner, a rollback path, and human review for exceptions.",
        )
    if any(term in text for term in ("model", "llm", "language model", "generative", "multimodal")):
        return (
            "A model capability may change the quality, speed, cost, or risk of knowledge work. "
            "Actual results depend on the task, data, and controls in your environment.",
            "Select one bounded work task and compare the tool against today's process using real "
            "but approved test cases. Review accuracy, data handling, cost, and time saved before scaling.",
        )
    return (
        "This development could change available AI or automation options. The practical effect "
        "depends on your team's workflow, systems, and risk controls.",
        "Ask a process owner to identify one small use case, record the current effort and error "
        "rate, then run a time-boxed pilot with human review.",
    )


def glossary(items: Iterable[NewsItem]) -> list[tuple[str, str]]:
    text = " ".join(f"{item.title} {item.summary}" for item in items)
    found = {match for match in ACRONYM_PATTERN.findall(text) if match in ACRONYMS}
    return sorted(((term, ACRONYMS[term]) for term in found), key=lambda pair: pair[0])


def digest_range(period: str, today: date) -> str:
    if period == "monthly":
        start, end = previous_month(today)
        return f"{start.strftime('%B')} {start.year}"
    start = today - timedelta(days=7)
    return f"{start.strftime('%d %b')}–{today.strftime('%d %b %Y')}"


def build_email(period: str, items: list[NewsItem], today: date) -> EmailMessage:
    monthly = period == "monthly"
    subject = (
        f"AI in Practice — Monthly Roundup: {digest_range(period, today)}"
        if monthly else f"AI in Practice — Weekly Brief: {digest_range(period, today)}"
    )
    text: list[str] = [
        "AI IN PRACTICE",
        "A concise, source-linked update on AI, RPA, and agentic systems.",
        "",
    ]
    if monthly:
        sources = sorted({item.source for item in items})
        themes: dict[str, int] = {}
        for item in items:
            theme = theme_for(item)
            themes[theme] = themes.get(theme, 0) + 1
        theme_summary = ", ".join(
            f"{theme} ({count})" for theme, count in sorted(themes.items())
        ) or "No recurring themes in the available articles."
        text.extend([
            f"MONTH IN REVIEW — {digest_range(period, today)}",
            f"Selected {len(items)} AI/automation items across {len(sources)} official source(s).",
            f"Recurring themes: {theme_summary}",
            "Use these as signals to review—not as a recommendation to adopt a tool.",
            "",
        ])
    if not items:
        text.extend([
            "No matching items were published in the selected period by the configured feeds.",
            "The next scheduled digest will check again.",
            "",
        ])
    for index, item in enumerate(items, 1):
        impact, use = work_guidance(item)
        excerpt = item.summary or "The source did not provide a summary; open the source for details."
        if len(excerpt) > 700:
            excerpt = excerpt[:697].rsplit(" ", 1)[0] + "..."
        text.extend([
            f"{index}. WHAT'S NEW",
            item.title,
            f"{item.source} · {item.published.strftime('%d %b %Y')}",
            excerpt,
            "",
            "HOW IT MAY IMPACT YOUR DAILY WORK",
            impact,
            "",
            "HOW / WHERE YOU COULD USE IT",
            use,
            "",
            "WANT TO LEARN MORE? SOURCE",
            item.url,
            "",
        ])
    terms = glossary(items)
    if terms:
        text.extend(["ABBREVIATIONS", *[f"{term} — {meaning}" for term, meaning in terms], ""])
    text.extend([
        "MONTH-END NOTE" if monthly else "MONTHLY ROUNDUP",
        (
            "This is the monthly summary of tracked items from the configured feeds. Coverage is "
            "limited to those sources and dates; it is not an exhaustive account of every AI release."
            if monthly else
            "On the first day of each month, subscribers receive a roundup of the previous month's "
            "tracked items, key sources, and recurring themes."
        ),
        "",
        "Editorial note: impact and use suggestions are practical prompts generated from article "
        "titles and feed summaries. Verify details in the linked source and review your organization's "
        "privacy, security, legal, and approval requirements before using a technology.",
    ])
    message = EmailMessage()
    message["Subject"] = subject
    message.set_content("\n".join(text))
    return message


def unsubscribe_link(token: str) -> str:
    base_url = os.environ.get("NEWSLETTER_SIGNUP_URL") or (
        "https://rajneesh05-lab.github.io/ai-governance-academy/newsletter.html"
    )
    separator = "&" if "?" in base_url else "?"
    query = urllib.parse.urlencode({"token": token})
    return f"{base_url}{separator}{query}"


def send_email(
    message: EmailMessage,
    subscribers: list[tuple[str, str]],
    *,
    preview: bool = False,
) -> None:
    api_key = os.environ.get("RESEND_API_KEY")
    if api_key:
        sender = os.environ.get(
            "NEWSLETTER_FROM", "AI in Practice <onboarding@resend.dev>"
        )
        for recipient, token in subscribers:
            payload = {
                "from": sender,
                "to": [recipient],
                "subject": (
                    f"[TEST PREVIEW] {message['Subject']}"
                    if preview else message["Subject"]
                ),
                "text": message.get_content() if preview else (
                    message.get_content()
                    + "\n\nTo stop receiving this newsletter, unsubscribe here:\n"
                    + unsubscribe_link(token)
                    + "\n"
                ),
            }
            request = urllib.request.Request(
                "https://api.resend.com/emails",
                data=json.dumps(payload).encode("utf-8"),
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                method="POST",
            )
            try:
                with urllib.request.urlopen(request, timeout=30) as response:
                    if response.status not in (200, 201, 202):
                        raise RuntimeError(
                            f"Email API returned unexpected HTTP {response.status}."
                        )
            except urllib.error.HTTPError as exc:
                raise RuntimeError(
                    f"Email API rejected a message (HTTP {exc.code}); check the API key, "
                    "sender verification, and provider restrictions."
                ) from exc
            except (urllib.error.URLError, TimeoutError, OSError) as exc:
                raise RuntimeError(
                    f"Email API request failed ({type(exc).__name__}): {exc}"
                ) from exc
            print(
                "Accepted one newsletter preview for delivery."
                if preview else "Accepted one newsletter message for delivery."
            )
        return

    host = os.environ["NEWS_SMTP_HOST"]
    port = int(os.environ.get("NEWS_SMTP_PORT", "587"))
    username = os.environ["NEWS_SMTP_USERNAME"]
    password = os.environ["NEWS_SMTP_PASSWORD"]
    sender = os.environ.get("NEWSLETTER_FROM", username)
    context = ssl.create_default_context()
    message["From"] = sender
    stage = "connecting"
    try:
        if port == 465:
            connection = smtplib.SMTP_SSL(host, port, context=context, timeout=30)
        else:
            connection = smtplib.SMTP(host, port, timeout=30)
        with connection:
            if port != 465:
                stage = "starting TLS"
                connection.starttls(context=context)
            stage = "authenticating"
            connection.login(username, password)
            for recipient, token in subscribers:
                stage = "sending message"
                outgoing = EmailMessage()
                outgoing["Subject"] = (
                    f"[TEST PREVIEW] {message['Subject']}"
                    if preview else message["Subject"]
                )
                outgoing["From"] = sender
                outgoing["To"] = recipient
                outgoing.set_content(
                    message.get_content() if preview else (
                        message.get_content()
                        + "\n\nTo stop receiving this newsletter, unsubscribe here:\n"
                        + unsubscribe_link(token)
                        + "\n"
                    )
                )
                connection.send_message(outgoing)
                print(
                    "Sent test preview to one requested recipient."
                    if preview else "Sent digest to one configured recipient."
                )
    except (OSError, smtplib.SMTPException) as exc:
        raise RuntimeError(
            f"SMTP failed while {stage} ({type(exc).__name__}): {exc}"
        ) from exc


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--period", choices=("weekly", "monthly"), required=True)
    parser.add_argument(
        "--test-recipient",
        action="append",
        default=[],
        help="Send a test preview only to these comma-separated addresses.",
    )
    parser.add_argument("--today", type=date.fromisoformat, default=date.today(), help=argparse.SUPPRESS)
    args = parser.parse_args()
    preview = bool(args.test_recipient)
    if preview:
        recipients = [
            address.strip()
            for value in args.test_recipient
            for address in value.split(",")
            if address.strip()
        ]
        if not recipients:
            raise RuntimeError("At least one test recipient address is required.")
        if any(
            not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", address)
            for address in recipients
        ):
            raise RuntimeError("A test recipient is not a valid email address.")
        subscribers = [(recipient, "") for recipient in recipients]
    else:
        try:
            raw_subscribers = json.loads(os.environ.get("NEWSLETTER_SUBSCRIBERS", "[]"))
        except json.JSONDecodeError as exc:
            raise RuntimeError("NEWSLETTER_SUBSCRIBERS must contain a valid JSON array.") from exc
        if not isinstance(raw_subscribers, list) or not raw_subscribers:
            raise RuntimeError("There are no active newsletter subscribers.")
        subscribers = []
        for entry in raw_subscribers:
            if not isinstance(entry, dict):
                raise RuntimeError("NEWSLETTER_SUBSCRIBERS contains an invalid entry.")
            recipient, token = entry.get("email"), entry.get("token")
            if not isinstance(recipient, str) or not isinstance(token, str):
                raise RuntimeError("NEWSLETTER_SUBSCRIBERS contains an invalid entry.")
            if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", recipient):
                raise RuntimeError("NEWSLETTER_SUBSCRIBERS contains an invalid email address.")
            if not re.fullmatch(r"[0-9a-fA-F-]{36}", token):
                raise RuntimeError("NEWSLETTER_SUBSCRIBERS contains an invalid unsubscribe token.")
            subscribers.append((recipient, token))
    items = collect_news(args.period, args.today)
    message = build_email(args.period, items, args.today)
    send_email(message, subscribers, preview=preview)
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (KeyError, ValueError, RuntimeError, smtplib.SMTPException) as exc:
        print(f"Newsletter failed: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc
