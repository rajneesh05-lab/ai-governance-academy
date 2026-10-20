# AI Governance Academy V3

A GitHub Pages-compatible enterprise AI governance learning application with a Supabase backend.

## V3 additions
- Local learning mode is available without Supabase: learners can take the course now; progress stays in the current browser and is separated by the entered email (not email-verified)
- Passwordless sign-in with a verified email magic link; learners use their name and email, never a password
- Progress synchronized across browsers and devices
- Central learner roster and login/activity insights
- Admin dashboard with learner-level progress, scores, study time, and last activity
- CSV reporting
- Row Level Security and role-based admin access
- All V2 capabilities: 15 modules, 150 questions, audio narration, visual maps, scoring, completion pace, and forecast

See `SETUP.md` for deployment instructions. Supabase setup is only required for verified sign-in, cross-device progress, and central administrator reporting; it is not required to take modules in local mode.

## AI and automation email digest
- Optional weekly briefing on official-source AI, agentic AI, and RPA news
- Monthly roundup of the prior month's items from the configured RSS feeds
- Public subscriber signup page: [newsletter.html](newsletter.html)
- Each item includes what's new, possible daily-work impact, a cautious work-use idea, a primary source link, and recognized abbreviation expansions
- Preview: `NEWSLETTER-SAMPLE.md`
- The email workflow requires a Supabase subscriber table and an email-provider API key configured as GitHub Actions secrets; it is independent of learner accounts.

## Architecture
Static HTML/CSS/JavaScript on GitHub Pages, Supabase Auth, PostgreSQL, and Row Level Security. No service-role key is used in the browser.
