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

## Architecture
Static HTML/CSS/JavaScript on GitHub Pages, Supabase Auth, PostgreSQL, and Row Level Security. No service-role key is used in the browser.
