// Parse all documents present in the "entries" folder and emit HTML fragments
// and a searchable index

const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);
const md = require('markdown-it');
const front_matter = require('markdown-it-front-matter');
const YAML = require('yaml');
const crypto = require('crypto');

const outputdir = path.resolve(__dirname, '..', 'dist');

try {
  fs.statSync(outputdir);
} catch (e) {
  fs.mkdirSync(outputdir);
}

// This script finds all files in the "entries" folder recursively and
// loads and parses them asynchronously. When this count reaches 0, the last
// entry to process finalizes the index
let entry_count = 1;
let entries = [];

const required_fields = ['title', 'year'];


function emit_entry(entry, render) {
  // Hash entry title as the identifier
  entry.id = crypto.createHash('md5').update(entry.title).digest('hex')
    + `_${entry.year}`;

  entries.push(entry);
  entry.offset = entries.length - 1;
  writeFile(path.resolve(outputdir, `${entry.id}.txt`), render);
}

function finalize() {
  entries.sort((a, b) => b.year - a.year);
  writeFile(path.resolve(outputdir, 'index.json'), JSON.stringify(entries));
}

async function process_entry(entry_path) {
  const data = await readFile(entry_path, { encoding: 'utf-8' });
  let entry = null;
  let render = md({
    html: true
  }).use(front_matter, (meta) => {
    entry = YAML.parse(meta);
  }).render(data);

  render = render.replace('<ul>', '<ul class="list-disc">');
  render = render.replace('<ol>', '<ll class="list-decimal">');

  let error_found = false;

  required_fields.forEach((field) => {
    if (!entry[field]) {
      console.log(`Entry ${entry_path} missing ${field}!`);
      errors = true;
    }
  })

  if (!entry.url && !entry.urls) {
    console.log(`Entry ${entry_path} missing "url" or "urls" field!`);
    errors = true;
  }

  if (!error_found) {
    emit_entry(entry, render);
  }
  if (--entry_count === 0) {
    finalize();
  }
}

async function process_dir(dir) {
  const entries = await readdir(dir);

  --entry_count;
  entry_count += entries.length;
  entries.forEach(async (entry) => {
    const entry_path = path.resolve(dir, entry);
    const entry_stat = await stat(entry_path);
    if (entry_stat.isDirectory()) {
      process_dir(entry_path);
    } else {
      process_entry(entry_path);
    }
  });
}

process_dir(path.resolve(__dirname, '..', 'entries'));
