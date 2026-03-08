const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../src/app/globals.css');
const outDir = path.join(__dirname, '../src/styles');

const content = fs.readFileSync(src, 'utf8');
const lines = content.split('\n');

// Non-overlapping: [name, startLine1-based, endLine1-based inclusive]
const sections = [
  ['_reset', 1, 20],
  ['_header', 22, 272],
  ['_hero', 273, 306],
  ['_flight-search', 307, 531],
  ['_auth', 532, 1060],
  ['_home-sections', 1061, 1543],
  ['_footer', 1544, 1882],
  ['_umrah', 1883, 2213],
  ['_study', 2214, 2625],
  ['_visa', 2626, 2891],
  ['_hotel', 2892, 3306],
  ['_insurance', 3307, 3700],
  ['_about', 3701, 4063],
  ['_contact', 4064, 4367],
  ['_flights', 4368, 6935],
  ['_booking', 6936, 7618],
  ['_info', 7619, lines.length],
];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const [name, start, end] of sections) {
  const chunk = lines.slice(start - 1, end).join('\n').trim();
  if (!chunk) continue;
  fs.writeFileSync(path.join(outDir, `${name}.scss`), chunk, 'utf8');
  console.log(`Wrote ${name}.scss (lines ${start}-${end})`);
}

console.log('Done.');
