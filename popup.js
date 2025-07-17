// Get search engines from storage or use defaults
const DEFAULT_ENGINES = [
  { name: 'Google', searchUrl: 'https://www.google.com/search?q={searchTerms}' },
  { name: 'YouTube', searchUrl: 'https://www.youtube.com/results?search_query={searchTerms}' },
  { name: 'Wikipedia', searchUrl: 'https://en.wikipedia.org/wiki/Special:Search?search={searchTerms}' },
  { name: 'Perplexity', searchUrl: 'https://www.perplexity.ai/search?q={searchTerms}' }
];

function getSearchEngines(callback) {
  chrome.storage.sync.get(['searchEngines'], (result) => {
    if (result.searchEngines && Array.isArray(result.searchEngines)) {
      callback(result.searchEngines);
    } else {
      callback(DEFAULT_ENGINES);
    }
  });
}

function setSearchEngines(engines, callback) {
  chrome.storage.sync.set({ searchEngines: engines }, callback);
}

document.addEventListener('DOMContentLoaded', () => {
  const engineSelect = document.getElementById('engineSelect');
  const queryInput = document.getElementById('queryInput');
  const searchBtn = document.getElementById('searchBtn');

  // Populate engines
  function refreshEngines(selectedName) {
    getSearchEngines((engines) => {
      engineSelect.innerHTML = '';
      engines.forEach((engine, idx) => {
        const opt = document.createElement('option');
        opt.value = engine.name;
        opt.textContent = engine.name;
        if (engine.name === selectedName) opt.selected = true;
        engineSelect.appendChild(opt);
      });
    });
  }

  refreshEngines();

  // Search button click
  searchBtn.addEventListener('click', () => {
    const query = queryInput.value.trim();
    if (!query) return;
    getSearchEngines((engines) => {
      const engine = engines.find(e => e.name === engineSelect.value);
      if (engine) {
        const url = engine.searchUrl.replace('{searchTerms}', encodeURIComponent(query));
        chrome.tabs.create({ url });
      }
    });
  });

  // Enter key triggers search
  queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
  });
});
