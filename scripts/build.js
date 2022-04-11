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
const { okhsl_to_srgb, okhsv_to_srgb } = require('./color_conversion');

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

function fnv1a(value) {
  // eslint-disable-next-line max-len
  // https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash
  let seed = 4;
  for (let i = 0; i !== value.length; ++i) {
    seed = ((seed * 16777619) ^ value.charCodeAt(i)) >>> 0;
  }
  // JS bitwise operations are interpreted as signed, so force an unsigned
  // interpretation
  return seed >>> 0;
}

function tag_to_rgb(tag) {
  const hash = fnv1a(tag.toLowerCase());
  let color = okhsl_to_srgb(hash / 0xffffffff, 0.5, 0.7);
  color = color.map(v => Math.round(v));
  return color;
}

// Map from tags to colors
const tags = {
  '...': [225, 225, 225]
};

function emit_entry(entry, render) {
  // Hash entry title as the identifier
  entry.id = crypto.createHash('md5').update(entry.title).digest('hex')
    + `_${entry.year}`;

  entries.push(entry);
  entry.offset = entries.length - 1;

  if (!entry.tags) {
    console.log(`Entry ${entry.title} missing tags!`);
    return;
  }

  entry.tags = entry.tags.map(tag => tag.toUpperCase());
  entry.tags = entry.tags.sort((a, b) => a < b ? -1 : 1);

  for (let i = 0; i !== entry.tags.length; ++i) {
    if (!tags[entry.tags[i]]) {
      tags[entry.tags[i]] = tag_to_rgb(entry.tags[i]);
    }
  }
  console.log(entry.tags, tags);

  writeFile(path.resolve(outputdir, `${entry.id}.txt`), render);
}

function finalize() {
  entries.sort((a, b) => b.year - a.year);

  const data = {
    entries,
    tags
  };
  writeFile(path.resolve(outputdir, 'index.json'), JSON.stringify(data));
}

async function process_entry(entry_path) {
  const data = await readFile(entry_path, { encoding: 'utf-8' });
  let entry = null;
  let render = md({
    html: true
  }).use(front_matter, (meta) => {
    entry = YAML.parse(meta);
  }).render(data);

  render = render.replaceAll('<ul>', '<ul class="list-disc">');
  render = render.replaceAll('<ol>', '<ll class="list-decimal">');

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
