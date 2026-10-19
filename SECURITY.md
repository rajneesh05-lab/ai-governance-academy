# Security
Learners sign in without passwords using verified email magic links. Require email confirmation in Supabase so access is granted only after inbox ownership is proven. Report private vulnerabilities directly to the repository owner; do not post credentials in public issues.

The browser may contain only the Supabase publishable/anon key; never use the service-role key. Keep Row Level Security enabled in production. Learners can read and update only their own progress; administrator reporting is restricted by the database role check.