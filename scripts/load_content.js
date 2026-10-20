// Loads the course content the same way the browser does (in index.html order), for Node scripts.
const fs = require('fs');
const path = require('path');

function loadAcademy(root = path.join(__dirname, '..')) {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const files = [...html.matchAll(/<script src="(content\/[^"]+\.js)"><\/script>/g)].map(m => m[1]);
  const window = {};
  for (const file of files) {
    new Function('window', 'ACADEMY', fs.readFileSync(path.join(root, file), 'utf8'))(window, window.ACADEMY);
  }
  return { academy: window.ACADEMY, files };
}

module.exports = { loadAcademy };
