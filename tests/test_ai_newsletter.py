import unittest
from datetime import date, datetime, timezone
from unittest.mock import patch

from scripts.ai_newsletter import (
    NewsItem,
    build_email,
    collect_news,
    parse_feed,
    previous_month,
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


if __name__ == "__main__":
    unittest.main()
