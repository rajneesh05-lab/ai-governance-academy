import json
import os
import urllib.error
import unittest
from datetime import date, datetime, timezone
from unittest.mock import MagicMock, patch

from scripts.ai_newsletter import (
    NewsItem,
    build_email,
    collect_news,
    parse_feed,
    previous_month,
    send_email,
    unsubscribe_link,
)


class NewsletterTests(unittest.TestCase):
    def test_rss_feed_is_parsed_and_html_is_cleaned(self):
        feed = b"""<?xml version="1.0"?>
        <rss><channel><item>
          <title>Agentic AI update</title>
          <description><![CDATA[New <b>automation</b> capabilities.]]></description>
          <link>https://example.com/article</link>
          <pubDate>Mon, 12 Oct 2026 00:00:00 GMT</pubDate>
        </item></channel></rss>"""
        items = parse_feed("Example", feed)
        self.assertEqual(len(items), 1)
        self.assertEqual(items[0].summary, "New automation capabilities.")
        self.assertEqual(items[0].published.date(), date(2026, 10, 12))

    def test_monthly_range_is_previous_calendar_month(self):
        self.assertEqual(
            previous_month(date(2026, 10, 1)),
            (date(2026, 9, 1), date(2026, 9, 30)),
        )

    def test_collect_filters_by_period_and_deduplicates_urls(self):
        recent = NewsItem("Test", "AI release", "Summary", "https://example.com/a",
                          datetime(2026, 10, 12, tzinfo=timezone.utc))
        old = NewsItem("Test", "Old release", "", "https://example.com/old",
                       datetime(2026, 10, 1, tzinfo=timezone.utc))
        with patch("scripts.ai_newsletter.fetch_feed", return_value=[recent, recent, old]):
            self.assertEqual(len(collect_news("weekly", date(2026, 10, 19))), 1)

    def test_relevance_filter_does_not_match_ai_inside_unrelated_words(self):
        from scripts.ai_newsletter import is_relevant

        unrelated = NewsItem("Test", "Training improvements", "", "https://example.com/t",
                             datetime(2026, 10, 12, tzinfo=timezone.utc))
        relevant = NewsItem("Test", "Agentic AI testing", "", "https://example.com/a",
                            datetime(2026, 10, 12, tzinfo=timezone.utc))
        self.assertFalse(is_relevant(unrelated))
        self.assertTrue(is_relevant(relevant))

    def test_message_has_four_sections_and_glossary(self):
        item = NewsItem(
            "UiPath",
            "What VAR can teach us about agentic testing",
            "AI agents execute tests and surface evidence while people keep accountability.",
            "https://www.uipath.com/blog/ai/what-var-can-teach-about-agentic-testing",
            datetime(2026, 10, 12, tzinfo=timezone.utc),
        )
        message = build_email("weekly", [item], date(2026, 10, 19))
        body = message.get_content()
        for heading in (
            "WHAT'S NEW",
            "HOW IT MAY IMPACT YOUR DAILY WORK",
            "HOW / WHERE YOU COULD USE IT",
            "WANT TO LEARN MORE? SOURCE",
            "VAR — Video Assistant Referee",
            "AI — Artificial Intelligence",
        ):
            self.assertIn(heading, body)
        self.assertIn(item.url, body)

    def test_monthly_message_describes_scope(self):
        message = build_email("monthly", [], date(2026, 10, 1))
        self.assertIn("Monthly Roundup: September 2026", message["Subject"])
        self.assertIn("not an exhaustive account", message.get_content())

    def test_unsubscribe_link_contains_token_without_recipient_address(self):
        from urllib.parse import parse_qs, urlparse

        link = unsubscribe_link("12345678-1234-1234-1234-123456789abc")
        parsed = urlparse(link)
        self.assertEqual(parsed.path, "/ai-governance-academy/newsletter.html")
        self.assertEqual(
            parse_qs(parsed.query),
            {"token": ["12345678-1234-1234-1234-123456789abc"]},
        )

    def test_resend_api_sends_individual_message_without_smtp(self):
        response = MagicMock()
        response.status = 200
        response_context = MagicMock()
        response_context.__enter__.return_value = response
        item = NewsItem(
            "Example",
            "AI release",
            "A new AI release.",
            "https://example.com/ai-release",
            datetime(2026, 10, 19, tzinfo=timezone.utc),
        )
        message = build_email("weekly", [item], date(2026, 10, 19))
        with (
            patch.dict(
                os.environ,
                {
                    "RESEND_API_KEY": "test-key",
                    "NEWSLETTER_SIGNUP_URL": "https://example.com/newsletter.html",
                },
                clear=True,
            ),
            patch("scripts.ai_newsletter.urllib.request.urlopen", return_value=response_context) as send,
        ):
            send_email(message, [("reader@example.com", "12345678-1234-1234-1234-123456789abc")])

        request = send.call_args.args[0]
        payload = json.loads(request.data)
        self.assertEqual(request.full_url, "https://api.resend.com/emails")
        self.assertEqual(payload["to"], ["reader@example.com"])
        self.assertEqual(payload["from"], "AI in Practice <onboarding@resend.dev>")
        self.assertIn("https://example.com/newsletter.html?token=", payload["text"])
        self.assertEqual(request.get_header("Authorization"), "Bearer test-key")

    def test_resend_api_reports_provider_rejection(self):
        item = NewsItem(
            "Example",
            "AI release",
            "A new AI release.",
            "https://example.com/ai-release",
            datetime(2026, 10, 19, tzinfo=timezone.utc),
        )
        message = build_email("weekly", [item], date(2026, 10, 19))
        error = urllib.error.HTTPError(
            "https://api.resend.com/emails", 403, "Forbidden", None, None
        )
        with (
            patch.dict(os.environ, {"RESEND_API_KEY": "test-key"}, clear=True),
            patch("scripts.ai_newsletter.urllib.request.urlopen", side_effect=error),
            self.assertRaisesRegex(RuntimeError, "HTTP 403"),
        ):
            send_email(message, [("reader@example.com", "12345678-1234-1234-1234-123456789abc")])

    def test_smtp_test_preview_is_marked_and_has_no_unsubscribe_link(self):
        message = build_email("weekly", [], date(2026, 10, 19))
        connection = MagicMock()
        connection.__enter__.return_value = connection
        with (
            patch.dict(
                os.environ,
                {
                    "NEWS_SMTP_HOST": "smtp.example.com",
                    "NEWS_SMTP_PORT": "587",
                    "NEWS_SMTP_USERNAME": "sender@example.com",
                    "NEWS_SMTP_PASSWORD": "test-password",
                },
                clear=True,
            ),
            patch("scripts.ai_newsletter.smtplib.SMTP", return_value=connection),
        ):
            send_email(message, [("reader@example.com", "")], preview=True)

        outgoing = connection.send_message.call_args.args[0]
        self.assertEqual(outgoing["To"], "reader@example.com")
        self.assertTrue(outgoing["Subject"].startswith("[TEST PREVIEW]"))
        self.assertNotIn("unsubscribe", outgoing.get_content().lower())

    def test_test_recipients_bypass_subscriber_list(self):
        from scripts.ai_newsletter import main

        message = build_email("weekly", [], date(2026, 10, 19))
        with (
            patch.dict(os.environ, {}, clear=True),
            patch(
                "sys.argv",
                [
                    "ai_newsletter.py",
                    "--period",
                    "weekly",
                    "--test-recipient",
                    "first@example.com,second@example.com",
                ],
            ),
            patch("scripts.ai_newsletter.collect_news", return_value=[]),
            patch("scripts.ai_newsletter.build_email", return_value=message),
            patch("scripts.ai_newsletter.send_email") as send,
        ):
            self.assertEqual(main(), 0)

        self.assertEqual(
            send.call_args.args[1],
            [("first@example.com", ""), ("second@example.com", "")],
        )
        self.assertTrue(send.call_args.kwargs["preview"])


if __name__ == "__main__":
    unittest.main()
