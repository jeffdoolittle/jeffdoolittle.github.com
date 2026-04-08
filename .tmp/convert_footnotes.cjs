#!/usr/bin/env node
const fs = require('fs');
const yaml = require('/Users/jeff/projects/jeffdoolittle.github.com/node_modules/js-yaml');

function convertFootnotes(path) {
  const content = fs.readFileSync(path, 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return false;

  let [, fmStr, body] = fmMatch;
  const fm = yaml.load(fmStr);
  const footnotes = fm.footnotes;
  if (!footnotes || !footnotes.length) return false;

  // Replace inline {% include fnref.html x=N %} with [^N]
  body = body.replace(/\{%-?\s*include fnref\.html\s+x=(\d+)\s*-?%\}/g, '[^$1]');

  // Remove the {% for fn in page.footnotes %} ... {% endfor %} block
  body = body.replace(/\{%-?\s*for fn in page\.footnotes\s*-?%\}[\s\S]*?\{%-?\s*endfor\s*-?%\}\n?/g, '');

  // Build GFM footnote definitions
  let fnDefs = '\n';
  for (const fn of footnotes) {
    const fnText = String(fn.content).trim().replace(/\n\s*/g, ' ');
    fnDefs += `[^${fn.id}]: ${fnText}\n`;
  }
  body = body.trimEnd() + '\n' + fnDefs;

  // Remove footnotes block from frontmatter
  // Match 'footnotes:' followed by indented lines
  fmStr = fmStr.replace(/^footnotes:[\s\S]*?(?=^[a-z_#]|\s*$)/m, '').trim();

  fs.writeFileSync(path, `---\n${fmStr}\n---\n${body}`);
  return true;
}

const posts = [
  'src/content/blog/2020-11-04-software-leadership-distilled.md',
  'src/content/blog/2020-05-22-dont-disrupt-agile-drop-it.md',
  'src/content/blog/2020-11-06-leadership-style-matrix.md',
  'src/content/blog/2022-02-23-the-tao-of-software-architecture-an-introduction.md',
];

for (const p of posts) {
  try {
    const result = convertFootnotes(p);
    console.log((result ? 'Converted' : 'Skipped') + ': ' + p.split('/').pop());
  } catch (e) {
    console.error('ERROR ' + p.split('/').pop() + ': ' + e.message);
  }
}
