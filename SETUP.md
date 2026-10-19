# V3 Setup

## 1. Create the backend
1. Create a Supabase project.
2. Open **SQL Editor**, paste `supabase/schema.sql`, and run it.
3. In **Authentication > URL Configuration**, set the Site URL to your GitHub Pages URL and add it as a redirect URL.
4. In **Authentication > Providers > Email**, enable email sign-in and require email confirmation. Learners authenticate by opening the emailed magic link; no password is created or entered.

## 2. Configure the website
1. Open **Project Settings > API**.
2. Copy the Project URL and publishable key (or legacy anon key).
3. Update `config.js`. Never use the service-role key in browser code.
4. Commit and deploy all files to GitHub Pages.

## 3. Create the administrator
1. Enter your name and email on the website and open the sign-in link sent to that email. The link verifies inbox ownership and creates the account on first sign-in.
2. Run this in the Supabase SQL Editor, replacing the email:

```sql
update public.profiles set role='admin' where email='you@example.com';
```

3. Sign out and sign back in through a fresh email link. The **Admin** button will appear.

## 4. What the admin dashboard provides
- Registered learners
- Active learners in the last seven days
- Completed modules
- Team average score
- Learner-level completion, scores, time, and last activity
- CSV report export

## Security notes
- Row Level Security limits learners to their own data.
- Only profiles marked `admin` can run the team summary function.
- Do not commit secrets or a service-role key.
- Review privacy, retention, consent, accessibility, and enterprise security requirements before broad deployment.

## Optional AI and automation newsletter

The repository includes a scheduled GitHub Actions workflow at `.github/workflows/ai-newsletter.yml`. It checks official-source RSS feeds for AI, agentic AI, and robotic process automation (RPA) updates, then sends a weekly email on Mondays and a monthly summary of the previous calendar month on the first day of each month. The workflow can also be run manually from **Actions → AI and automation newsletter → Run workflow**.

To enable sending, add these values under repository **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
| --- | --- |
| `NEWSLETTER_RECIPIENTS` | Comma- or semicolon-separated subscriber email addresses |
| `NEWS_SMTP_HOST` | Hostname from your email provider's SMTP setup |
| `NEWS_SMTP_PORT` | Usually `587` (STARTTLS) or `465` (SSL) |
| `NEWS_SMTP_USERNAME` | SMTP account/user name |
| `NEWS_SMTP_PASSWORD` | SMTP app password or provider token; do not use a personal account password |
| `NEWSLETTER_FROM` | Optional sender address; defaults to the SMTP username |

The workflow sends a separate message to each recipient, so subscribers do not see one another's addresses. It reports feed failures in the workflow log and stops if all configured feeds fail. No recipients or email credentials are stored in the public site or source code. Review `NEWSLETTER-SAMPLE.md` for a representative message; suggestions about impact and workplace use are labeled as editorial prompts, not as claims from the linked sources.

By default, the workflow uses official feeds from UiPath, Microsoft AI, OpenAI, and Google AI. Feed availability and RSS retention vary, so the monthly summary is limited to items available from those feeds in the selected date range and is not an exhaustive survey of the AI industry. Update `FEEDS` in `scripts/ai_newsletter.py` to add or remove sources.
