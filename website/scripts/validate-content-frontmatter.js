#!/usr/bin/env node
// validate-content-frontmatter.js
// Checks all Markdown files in Nuxt Content folders for required frontmatter fields

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIRS = [
  'content/blog',
  'content/research',
  'content/philosophy'
];
const REQUIRED_FIELDS = ['title', 'date'];

function findMarkdownFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function validateFrontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const { data } = matter(raw);
  const missing = REQUIRED_FIELDS.filter(f => !data[f]);
  return { file, missing };
}

let hasErrors = false;
for (const dir of CONTENT_DIRS) {
  const files = findMarkdownFiles(path.join(process.cwd(), dir));
  for (const file of files) {
    const { missing } = validateFrontmatter(file);
    if (missing.length) {
      hasErrors = true;
      console.log(`❌ ${file} is missing: ${missing.join(', ')}`);
    } else {
      console.log(`✅ ${file} OK`);
    }
  }
}

if (hasErrors) {
  console.log('\nSome files are missing required frontmatter fields. Please fix them!');
  process.exit(1);
} else {
  console.log('\nAll Markdown files have required frontmatter fields.');
  process.exit(0);
}
