async function toggle_collapse(el) {
  if (el._shown) {
    el.children[1].classList.add('rotate-180');
    el.nextElementSibling.classList.add('hidden');
    el._shown = false;
    if (window.shown_el === el) {
      window.shown_el = null;
    }
  } else {
    if (!el._loaded) {
      const fragment =
        await (await fetch(`dist/${el._entry.offset}.txt`)).text();
      el.nextElementSibling.innerHTML += fragment;

      renderMathInElement(el.nextElementSibling, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
      });

      el._loaded = true;
    }
    el.children[1].classList.remove('rotate-180');
    el.nextElementSibling.classList.remove('hidden');
    el._shown = true;

    if (window.shown_el) {
      window.shown_el.children[1].classList.add('rotate-180');
      window.shown_el.nextElementSibling.classList.add('hidden');
      window.shown_el._shown = false;
    }
    window.shown_el = el;
  }
}

window.previous_results = new Set;

function fuse_search(el) {
  if (el.value.length > 1) {
    if (entries._shown) {
      entries.classList.add('hidden');
      entries._shown = false;
    }

    const search_results = window.fuse.search(el.value);

    let to_remove = [];
    let to_add = [];
    const next_indices = new Set;

    search_results.forEach((result) => {
      if (!window.previous_results.has(result.refIndex)) {
        to_add.push(result.item.el);
      }
      next_indices.add(result.refIndex);
    });

    window.previous_results.forEach((previous) => {
      if (!next_indices.has(previous)) {
        to_remove.push(window.index[previous].el);
      }
    });
    window.previous_results = next_indices;

    if (to_remove.length > 0) {
      entries.append(...to_remove);
    }

    if (to_add.length > 0) {
      results.append(...to_add);
    }
  } else if (!entries._shown) {
    entries.append(...results.children);
    entries.classList.remove('hidden');
    entries._shown = true;
  }
}

window.onload = async () => {
  window.index = await (await fetch('dist/index.json')).json();
  window.fuse = new Fuse(window.index, {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['title', 'tags', 'authors', 'year']
  });

  window.entries = document.getElementById('entries');
  entries._shown = true;
  window.results = document.getElementById('results');
  const template = document.getElementById('entry-template');

  window.index.forEach(entry => {
    const el = template.cloneNode(true);
    entry.el = el;
    el.classList.remove('hidden');
    el.id = `entry-${entry.offset}`;
    el.children[0].children[0].innerHTML = entry.title;
    el.children[1].innerHTML = `
    <div class="mb-4 flex justify-between">
    <a href=${entry.url}
      class="text-blue-600 hover:text-blue-700 transition mb-4">
      Link</a>
    <div class="flex flex-col text-right max-w-sm">
      <span>${entry.authors.join(', ')}</span>
      <span class="font-mono">${entry.year}</span>
    </div>
    </div>
    `;
    el.children[0]._entry = entry;
    el.children[0]._shown = false;

    entries.appendChild(el);
  });
}
