// Prints each role's learning path (module ids and titles) as JSON for the completion email script.
const { loadAcademy } = require('./load_content');

const { academy: A } = loadAcademy();
const roles = A.roles.map(r => ({
  id: r.id,
  name: r.name,
  modules: [...A.foundations, ...(A.tracks[r.id] || [])].map(m => ({ id: m.id, title: m.title }))
}));
process.stdout.write(JSON.stringify({ roles, legacyRoles: A.legacyRoles }));
