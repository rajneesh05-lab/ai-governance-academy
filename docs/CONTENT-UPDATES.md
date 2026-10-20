# Keeping the academy up to date

AI tools, regulation and good practice change every few months. This is how the academy keeps its content current without breaking learners' progress.

## 1. Content is data, separate from the app
All learning material lives in `content/`. Updating a lesson, quiz, template or glossary term is a text edit in one file, with no app code involved.

| What you want to change | Where |
| --- | --- |
| A lesson, scenario or quiz in a role track | `content/roles/<role>.js` |
| Foundations modules, roles, shared templates | `content/core.js` |
| Glossary terms and role notes | `content/glossary.js` |
| "What's new" announcements | `content/changelog.js` |

## 2. Rules that protect learner progress
- **Never change a module's `id`.** Progress, scores and certificates are keyed by it. Editing the title, lessons or quiz is safe.
- **New module = new id.** To add a new module to a role track, add it with a new id; learners who have finished the path keep their certificate, and the new module shows as not started.
- **Mark material changes.** Add `updated: "YYYY-MM-DD"` to a module you significantly changed. Learners see an "Updated" badge on it for 60 days.
- **Announce it.** Add an entry to the top of `content/changelog.js`; the newest entry appears on every learner's dashboard.

## 3. Change workflow
1. Open a branch and edit the content files (or ask Claude to draft the update).
2. Open a pull request. The **Content and certificate checks** workflow runs `node scripts/validate_content.js`, which catches missing fields, duplicate ids, quiz answers out of range, missing explanations and unknown roles.
3. A content owner for the affected role reviews it (see below) and merges. GitHub Pages publishes the change automatically.

Run the same check locally with `node scripts/validate_content.js`.

## 4. Suggested operating rhythm
- **Content owners:** name one owner per role track (for example a senior PM for the Product Manager track) and one for Foundations and the glossary. They review changes and the quarterly refresh.
- **Monthly:** skim the AI newsletter digest this repo already sends; log items that affect a lesson (new regulation dates, new tool categories, notable incidents) as GitHub issues labelled `content`.
- **Quarterly:** each owner reviews their track against the open `content` issues, learner quiz results (questions most people get wrong usually signal unclear lessons), and feedback; ships one batch of updates with a changelog entry.
- **When regulation changes:** update Foundations module 3, the Risk, Compliance & Legal track and the related glossary terms first, then check other tracks that mention the change.

## 5. Adding a new role
1. Add the role to `roles` in `content/core.js` (id, name, who, focus).
2. Create `content/roles/<id>.js` with four modules (stages `use`, `identify`, `implement`, `govern`) and its templates. Copy an existing role file as a starting point.
3. Add the role id to relevant glossary terms (`roles`, and `you` notes).
4. Add the `<script>` tag for the new file in `index.html`. The validator fails if you forget.

## Possible next steps
- A "Suggest an improvement" link on each module that opens a pre-filled issue, so learners feed the review cycle.
- Quiz analytics in the admin dashboard (per-question correct rates) to target the quarterly review.
- Asking learners to retake a module when it is marked `updated` after their completion.
