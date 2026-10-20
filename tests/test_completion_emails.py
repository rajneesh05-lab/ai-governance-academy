import base64
import json
import unittest
from unittest.mock import patch
from datetime import datetime, timezone

from scripts.completion_emails import build_email, send_with_resend, certificate_id, certificate_pdf, find_completion, load_paths

PATHS = {
    "roles": [{"id": "product", "name": "Product Manager",
               "modules": [{"id": "f1", "title": "AI in plain English"}, {"id": "pm-use", "title": "AI in the PM's week"}]}],
    "legacyRoles": {"Product Manager": "product"},
}
ISSUED = datetime(2026, 10, 20, tzinfo=timezone.utc)


def learner(**overrides):
    base = {"user_id": "11111111-2222-3333-4444-555555555555", "full_name": "Dana Lee", "email": "dana@example.com",
            "work_role": "product", "completed_modules": ["f1", "pm-use"], "scores": {"f1": 80, "pm-use": 100}}
    return {**base, **overrides}


class CompletionEmailTests(unittest.TestCase):
    def test_completion_requires_every_module_in_the_role_path(self):
        self.assertIsNone(find_completion(learner(completed_modules=["f1"]), PATHS, ISSUED))
        completion = find_completion(learner(), PATHS, ISSUED)
        self.assertEqual(completion.modules, [("AI in plain English", 80), ("AI in the PM's week", 100)])
        self.assertEqual(completion.average, 90)

    def test_legacy_and_unknown_roles(self):
        self.assertEqual(find_completion(learner(work_role="Product Manager"), PATHS, ISSUED).role_id, "product")
        self.assertIsNone(find_completion(learner(work_role="astronaut"), PATHS, ISSUED))

    def test_certificate_id_is_stable_per_learner_and_role(self):
        self.assertEqual(certificate_id("a", "product"), certificate_id("a", "product"))
        self.assertNotEqual(certificate_id("a", "product"), certificate_id("a", "developer"))
        self.assertRegex(certificate_id("a", "product"), r"^AIGA-[0-9A-F]{10}$")

    def test_pdf_is_well_formed(self):
        pdf = certificate_pdf(find_completion(learner(full_name="José (Joe) O'Neil"), PATHS, ISSUED))
        self.assertTrue(pdf.startswith(b"%PDF-1.4"))
        self.assertTrue(pdf.rstrip().endswith(b"%%EOF"))
        xref = int(pdf.rsplit(b"startxref\n", 1)[1].split(b"\n")[0])
        self.assertTrue(pdf[xref:].startswith(b"xref"))
        self.assertIn(b"Jos\xe9 \\(Joe\\) O'Neil", pdf)

    def test_email_lists_scores_and_attaches_certificate(self):
        message = build_email(find_completion(learner(), PATHS, ISSUED), "academy@example.com", "https://example.com/")
        self.assertEqual(message["To"], "dana@example.com")
        text = message.get_body(preferencelist=("plain",)).get_content()
        self.assertIn("80%  AI in plain English", text)
        self.assertIn("Average: 90%", text)
        attachments = list(message.iter_attachments())
        self.assertEqual(len(attachments), 1)
        self.assertEqual(attachments[0].get_content_type(), "application/pdf")

    def test_resend_payload_includes_both_bodies_and_the_pdf(self):
        message = build_email(find_completion(learner(), PATHS, ISSUED), "Academy <a@example.com>", "https://example.com/")
        with patch("scripts.completion_emails.urllib.request.urlopen") as urlopen:
            send_with_resend(message, "re_test")
        request = urlopen.call_args.args[0]
        payload = json.loads(request.data)
        self.assertEqual(request.full_url, "https://api.resend.com/emails")
        self.assertEqual(payload["to"], ["dana@example.com"])
        self.assertIn("Average: 90%", payload["text"])
        self.assertIn("<table", payload["html"])
        self.assertTrue(base64.b64decode(payload["attachments"][0]["content"]).startswith(b"%PDF"))

    def test_real_content_paths_load(self):
        paths = load_paths()
        self.assertGreaterEqual(len(paths["roles"]), 1)
        for role in paths["roles"]:
            self.assertTrue(role["modules"])


if __name__ == "__main__":
    unittest.main()
