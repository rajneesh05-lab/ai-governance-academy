# AI Governance Academy V3

A GitHub Pages-compatible enterprise AI governance learning application with a Supabase backend.

## V3 additions
- Passwordless sign-in with a verified email magic link; learners use their name and email, never a password
- Progress synchronized across browsers and devices
- Central learner roster and login/activity insights
- Admin dashboard with learner-level progress, scores, study time, and last activity
- CSV reporting
- Row Level Security and role-based admin access
- All V2 capabilities: 15 modules, 150 questions, audio narration, visual maps, scoring, completion pace, and forecast

See `SETUP.md` for deployment instructions.

## AI and automation email digest
- Optional weekly briefing on official-source AI, agentic AI, and RPA news
- Monthly roundup of the prior month's items from the configured RSS feeds
- Each item includes what's new, possible daily-work impact, a cautious work-use idea, a primary source link, and recognized abbreviation expansions
- Preview: `NEWSLETTER-SAMPLE.md`
- The email workflow requires recipient and SMTP credentials configured as GitHub Actions secrets; it is independent of Supabase.

## Architecture
Static HTML/CSS/JavaScript on GitHub Pages, Supabase Auth, PostgreSQL, and Row Level Security. No service-role key is used in the browser.
