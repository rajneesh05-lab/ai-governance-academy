# AI Governance Academy

A GitHub Pages-compatible, role-based AI learning application with an optional Supabase backend.

## What learners get
Each learner picks their role at sign-in and sees a learning path, templates and glossary built for it. The role can be changed at any time, and other roles' paths can be previewed.

- **8 roles:** Developer, Data & ML Engineer, Product Manager, Project / Delivery Manager, Business Leader, Operations Leader, Risk, Compliance & Legal, and Business Function Professional (HR, finance, sales, marketing, service).
- **Foundations (shared, 3 modules):** AI in plain English, choosing the right kind of AI, and responsible use and governance essentials.
- **Role track (4 modules per role):** using AI in your work, identifying the right solution, implementing it, and control and governance.
- **Every module:** learning outcomes, lessons, a worked scenario, a "try it this week" exercise, watch-outs, audio narration, and a 5-question quiz with explanations (70% to pass).
- **Templates:** 3 to 4 per role plus shared ones (use case intake, incident report). They can be filled in on the page and downloaded as Markdown.
- **Progress and certificates:** a My progress page with status, best score and attempts per module; a printable certificate when the path is complete; and, for signed-in learners, an email with module scores and a PDF certificate sent to their login email.
- **Answers explained:** after each quiz learners see the correct answer and an explanation for every question.
- **Glossary:** 78 terms with plain-English definitions, key terms flagged per role, and notes on what a term means in a given job.

## Platform
- Passwordless sign-in with a verified email magic link when Supabase is configured; the learner's role is stored on their account
- Local learning mode (no sign-in) as a fallback, with progress kept in the current browser
- Progress synchronized across browsers and devices for signed-in learners
- Admin dashboard with learner role, progress, scores, study time and last activity, plus CSV export
- Row Level Security and role-based admin access

## Editing content
All course content lives in `content/`: `core.js` (roles, stages, Foundations, shared templates), `roles/<role>.js` (each role's track and templates), `glossary.js` and `changelog.js`. Pull requests run `node scripts/validate_content.js`. See [docs/CONTENT-UPDATES.md](docs/CONTENT-UPDATES.md) for the update process and the rules that protect learner progress.

See `SETUP.md` for deployment instructions. Supabase setup is only required for verified sign-in, cross-device progress, and central administrator reporting; it is not required to take modules in local mode.

## AI and automation email digest
- Optional weekly briefing on official-source AI, agentic AI, and RPA news
- Monthly roundup of the prior month's items from the configured RSS feeds
- Public subscriber signup page: [newsletter.html](newsletter.html)
- Each item includes what's new, possible daily-work impact, a cautious work-use idea, a primary source link, and recognized abbreviation expansions
- Preview: `NEWSLETTER-SAMPLE.md`
- The email workflow requires recipient and SMTP credentials configured as GitHub Actions secrets; it is independent of Supabase.

## Architecture
Static HTML/CSS/JavaScript on GitHub Pages, Supabase Auth, PostgreSQL, and Row Level Security. No service-role key is used in the browser.
