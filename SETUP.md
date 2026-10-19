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
