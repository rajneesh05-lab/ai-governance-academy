// Checks the course content for structural mistakes before it is published. Run: node scripts/validate_content.js
const { loadAcademy } = require('./load_content');

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
let A, files;
try {
  ({ academy: A, files } = loadAcademy());
} catch (e) {
  console.error(`Content failed to load: ${e.message}`);
  process.exit(1);
}

const roleIds = new Set(A.roles.map(r => r.id));
const STAGES = ['use', 'identify', 'implement', 'govern'];
const ids = new Set();
const isText = v => typeof v === 'string' && v.trim().length > 0;
const isTextList = v => Array.isArray(v) && v.length > 0 && v.every(isText);

for (const r of A.roles) {
  for (const k of ['id', 'name', 'who', 'focus']) if (!isText(r[k])) fail(`role ${r.id}`, `missing ${k}`);
  if (!files.includes(`content/roles/${r.id}.js`)) fail(`role ${r.id}`, `content/roles/${r.id}.js is not loaded in index.html`);
  const stages = (A.tracks[r.id] || []).map(m => m.stage);
  if (stages.join() !== STAGES.join()) fail(`role ${r.id}`, `track stages must be ${STAGES.join(', ')} (found ${stages.join(', ') || 'none'})`);
  if (!(A.templates[r.id] || []).length) fail(`role ${r.id}`, 'has no templates');
}
for (const legacy of Object.values(A.legacyRoles)) if (!roleIds.has(legacy)) fail('legacyRoles', `unknown role ${legacy}`);

const modules = [...A.foundations, ...A.roles.flatMap(r => A.tracks[r.id] || [])];
for (const m of modules) {
  const at = `module ${m.id}`;
  if (!/^[a-z0-9-]+$/.test(m.id || '')) fail(at, 'id must be lowercase letters, digits and dashes');
  if (ids.has(m.id)) fail(at, 'duplicate id');
  ids.add(m.id);
  if (!A.stages[m.stage]) fail(at, `unknown stage ${m.stage}`);
  for (const k of ['title', 'summary', 'exercise']) if (!isText(m[k])) fail(at, `missing ${k}`);
  if (!(m.minutes > 0)) fail(at, 'minutes must be a positive number');
  if (m.updated && !/^\d{4}-\d{2}-\d{2}$/.test(m.updated)) fail(at, 'updated must be YYYY-MM-DD');
  if (!isTextList(m.outcomes)) fail(at, 'needs outcomes');
  if (!isTextList(m.watchouts)) fail(at, 'needs watchouts');
  if (!Array.isArray(m.sections) || !m.sections.length) fail(at, 'needs sections');
  (m.sections || []).forEach((s, i) => {
    if (!isText(s.h) || !isText(s.body)) fail(at, `section ${i + 1} needs h and body`);
    if (s.points && !isTextList(s.points)) fail(at, `section ${i + 1} points must be text`);
  });
  if (!m.scenario || !isText(m.scenario.title) || !isText(m.scenario.situation) || !isTextList(m.scenario.approach)) fail(at, 'scenario needs title, situation and approach');
  if (!Array.isArray(m.quiz) || m.quiz.length < 3) fail(at, 'needs at least 3 quiz questions');
  (m.quiz || []).forEach((q, i) => {
    const qa = `${at} question ${i + 1}`;
    if (!isText(q.q)) fail(qa, 'missing question text');
    if (!isTextList(q.o) || q.o.length < 2) fail(qa, 'needs at least 2 options');
    else if (new Set(q.o).size !== q.o.length) fail(qa, 'has duplicate options');
    if (!Number.isInteger(q.a) || q.a < 0 || q.a >= (q.o || []).length) fail(qa, 'answer index a is out of range');
    if (!isText(q.why)) fail(qa, 'missing explanation (why)');
  });
}

const templateIds = new Set();
for (const [owner, list] of [...Object.entries(A.templates), ['shared', A.sharedTemplates]]) {
  if (owner !== 'shared' && !roleIds.has(owner)) fail(`templates ${owner}`, 'unknown role');
  for (const t of list) {
    const at = `template ${t.id}`;
    if (templateIds.has(t.id)) fail(at, 'duplicate id');
    templateIds.add(t.id);
    for (const k of ['title', 'purpose', 'when']) if (!isText(t[k])) fail(at, `missing ${k}`);
    if (!Array.isArray(t.sections) || !t.sections.length) fail(at, 'needs sections');
    (t.sections || []).forEach((s, i) => { if (!isText(s.h) || !isTextList(s.fields)) fail(at, `section ${i + 1} needs h and fields`); });
  }
}

const terms = new Set();
for (const g of A.glossary) {
  const at = `glossary "${g.term}"`;
  if (!isText(g.term) || !isText(g.def) || !isText(g.cat)) fail(at, 'needs term, def and cat');
  if (terms.has((g.term || '').toLowerCase())) fail(at, 'duplicate term');
  terms.add((g.term || '').toLowerCase());
  for (const r of [...(g.roles || []), ...Object.keys(g.you || {})]) if (!roleIds.has(r)) fail(at, `unknown role ${r}`);
}

for (const [i, c] of (A.changelog || []).entries()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date || '') || !isText(c.title) || !isTextList(c.items)) fail(`changelog entry ${i + 1}`, 'needs date (YYYY-MM-DD), title and items');
}

if (errors.length) {
  console.error(`Content check failed with ${errors.length} problem(s):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`Content OK: ${A.roles.length} roles, ${modules.length} modules, ${templateIds.size} templates, ${A.glossary.length} glossary terms.`);
