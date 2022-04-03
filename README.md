# Paper Bug

_CONTRIBUTIONS WANTED_

## What is this?

The idea is to have an annotated and easily searchable repository of papers, presentations, articles, etc.

## How can I help?

To run the site locally, you must:

- Clone this repository
- Install dependencies
  - Ensure you have `node` and `npm` in your path (installing node will install the latter)
  - Run `npm i` in this repository
- Run `npm run start` in a terminal to start a live server and several utilities that will regenerate files when content changes

The site is a set of markdown files in the `entries/` folder. You can place entry files anywhere you like in this folder, and name them however you like.

The index is built from the front-matter at the top of the markdown file, which is parsed as YAML. Be sure that the front-matter contains at least the year, authors, title, and url.

The contents of the markdown can contain LaTeX delimited by dollar signs (rendered using KaTeX), arbitrary HTML, and typical markdown elements.

## Are there guidelines for adding entries?

An ideal entry:

- is relatively concise
- mentions the important ideas
- links any supporting materials needed
- mentions if a newer paper, result, or code supersedes the contents of the entry
