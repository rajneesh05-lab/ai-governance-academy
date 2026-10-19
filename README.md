# AI Governance Academy V2

A zero-backend, GitHub Pages-ready learning application for enterprise project managers.

## Features
- 15 modules from AI foundations through enterprise AI control towers
- Visual process maps and browser text-to-speech narration
- 10-question quiz for every module (150 questions total)
- 70% pass threshold, best-score and attempt tracking
- Browser-local login, progress, minutes, average score, completion, pace and completion forecast
- Responsive design; no build step or external dependencies

## Run locally
Open `index.html`, or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository and upload these files to its root.
2. In repository **Settings > Pages**, select **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.

## Privacy and production note
Login and progress use `localStorage` only. The email is not transmitted. This is suitable for personal/static learning. For multi-device identity, centralized records, admin reporting, or regulated training evidence, add a secure backend and enterprise identity provider.

## Content maintenance
AI governance requirements change. Review regulatory content against authoritative legal and standards sources before enterprise use.
