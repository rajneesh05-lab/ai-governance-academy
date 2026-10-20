# V3 Setup

## Take the course without Supabase

The course is available immediately in **Local learning mode** when `config.js` is unconfigured. Enter a name and email to start learning; no password is needed. The email is not verified, and the name/email are only a local profile label—not secure authentication. Progress is stored in that browser on that device and separated by the entered email. Other learners using that same browser should sign out and enter their own email. There is no cross-device sync, central learner roster, or admin dashboard in this mode. Clearing browser storage removes local progress.

Connect Supabase when you want progress saved to a central learner record, completion certificates by email, or centralized team reporting.

## 1. Create the backend
1. Create a Supabase project.
2. Open **SQL Editor**, paste `supabase/schema.sql`, and run it.
3. In **Authentication > URL Configuration**, set the Site URL to your GitHub Pages URL and add it as a redirect URL.
4. In **Authentication > Sign In / Providers**, turn on **Allow anonymous sign-ins**. Learners enter their name, email and role and go straight in; no email link or password. The email is **not verified**: it is stored on the learner record and used for the completion certificate. The learner record lives in that browser, so a learner who signs out, clears browser data or switches device starts a new record. If anonymous sign-ins are off, the site falls back to Local learning mode.

## 2. Configure the website
1. Open **Project Settings > API**.
2. Copy the Project URL and publishable key (or legacy anon key).
3. Update `config.js`. Never use the service-role key in browser code.
4. Commit and deploy all files to GitHub Pages.

## Upgrading an existing V3 database
Run `supabase/role-tracks-upgrade.sql` once in the SQL Editor. It adds each learner's role to the admin dashboard and creates the `certificates` table used by completion emails. Progress recorded against the old 15 modules does not carry over to the new role-based modules.

To switch from emailed sign-in links to the simple name, email and role sign-in, run `supabase/simple-signin-upgrade.sql` once and turn on **Allow anonymous sign-ins** (step 4 above).

## 3. Create the administrator
1. Enter your name, email and role on the website. This creates your learner record in this browser.
2. Anyone can type any email, so find your own record first and promote it by id. In the Supabase SQL Editor, run this with your email and pick the row you just created (newest first):

```sql
select id, full_name, created_at from public.profiles where email='you@example.com' order by created_at desc;
update public.profiles set role='admin' where id='PASTE-THE-ID';
```

3. Reload the page. The **Admin** button will appear. Because sign-in is tied to the browser, use the same browser for admin work and do not sign out.

## 4. What the admin dashboard provides
- Registered learners
- Active learners in the last seven days
- Completed modules
- Team average score
- Learner-level completion, scores, time, and last activity
- CSV report export
- Certificate status per learner, with **Resend** to send a certificate again to a corrected email address (it goes out on the next run of the completion job, within 30 minutes)

## Security notes
- Row Level Security limits learners to their own data.
- Only profiles marked `admin` can run the team summary function.
- Do not commit secrets or a service-role key.
- Review privacy, retention, consent, accessibility, and enterprise security requirements before broad deployment.

## Optional AI and automation newsletter

The repository includes a scheduled GitHub Actions workflow at `.github/workflows/ai-newsletter.yml`. It checks official-source RSS feeds for AI, agentic AI, and robotic process automation (RPA) updates, then sends a weekly email on Mondays and a monthly summary of the previous calendar month on the first day of each month. The workflow can also be run manually from **Actions → AI and automation newsletter → Run workflow**.

Run `supabase/newsletter.sql` in your Supabase SQL Editor to create the private subscriber table. (The main academy schema is in `supabase/schema.sql`.) After GitHub Pages is deployed, the signup page is:

`https://rajneesh05-lab.github.io/ai-governance-academy/newsletter.html`

Subscribers enter their address there and explicitly consent to the weekly and monthly emails. The page writes only to the subscriber table; it cannot read the list. Each newsletter includes a personalized unsubscribe link. To enable delivery, add these values under repository **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
| --- | --- |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key; store only as a GitHub Actions secret, never in `config.js` or browser code |
| `NEWS_SMTP_HOST` | Hostname from your email provider's SMTP setup |
| `NEWS_SMTP_PORT` | Usually `587` (STARTTLS) or `465` (SSL) |
| `NEWS_SMTP_USERNAME` | SMTP account/user name |
| `NEWS_SMTP_PASSWORD` | SMTP app password or provider token; do not use a personal account password |
| `NEWSLETTER_FROM` | Optional sender address; defaults to the SMTP username |

The workflow reads active subscribers from Supabase and sends a separate message to each, so subscribers do not see one another's addresses. Optionally define the Actions variable `NEWSLETTER_SIGNUP_URL` if your deployed signup page uses a different URL. It reports feed failures in the workflow log and stops if all configured feeds fail. No recipient addresses or email credentials are stored in the public site or source code. Review `NEWSLETTER-SAMPLE.md` for a representative message; suggestions about impact and workplace use are labeled as editorial prompts, not as claims from the linked sources.

Until the required Supabase and SMTP secrets exist, scheduled and manual runs perform the tests, show a setup warning, and skip sending. If there are no active subscribers, the workflow also skips delivery.

By default, the workflow uses official feeds from UiPath, Microsoft AI, OpenAI, and Google AI. Feed availability and RSS retention vary, so the monthly summary is limited to items available from those feeds in the selected date range and is not an exhaustive survey of the AI industry. Update `FEEDS` in `scripts/ai_newsletter.py` to add or remove sources.

## Completion certificates by email

When a signed-in learner passes every module in their role path, the **Completion certificates** workflow (`.github/workflows/completion-emails.yml`) emails them their best score per module and a PDF certificate at the address they signed in with. It runs every 30 minutes and can be run manually from **Actions → Completion certificates → Run workflow**. Each learner gets one email per completed role path.

It needs `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, plus one way to send email:

- **Resend (recommended):** `RESEND_API_KEY` and `NEWSLETTER_FROM` (an address on a domain verified in Resend, for example `Academy <academy@yourdomain.com>`). Used whenever `RESEND_API_KEY` is set.
- **SMTP:** the newsletter's `NEWS_SMTP_HOST`, `NEWS_SMTP_PORT`, `NEWS_SMTP_USERNAME`, `NEWS_SMTP_PASSWORD` and optionally `NEWSLETTER_FROM`. Gmail and Outlook need an app password, not your normal password. Optionally set the repository variable `ACADEMY_URL` to the site address used in the email. Until the secrets are set, the workflow skips sending with a warning. Requires the `certificates` table from `supabase/schema.sql` (new installs) or `supabase/role-tracks-upgrade.sql` (existing installs).

Learners in local mode (not signed in) can view and print their certificate in the app, but are not emailed because their address is not verified.

To preview the email and certificate without sending anything: `python scripts/completion_emails.py --preview preview/`.
