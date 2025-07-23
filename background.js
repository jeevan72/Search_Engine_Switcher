/**
 * @fileoverview This script handles the logic for switching the default
 * search engine when the user presses the defined keyboard shortcut.
 */

// Default search engines. Users can add more via addSearchEngine().
const DEFAULT_ENGINES = [
  {
    name: 'Google',
    searchUrl: 'https://www.google.com/search?q={searchTerms}',
  },
  {
    name: 'YouTube',
    searchUrl: 'https://www.youtube.com/results?search_query={searchTerms}',
  },
  {
    name: 'Wikipedia',
    searchUrl: 'https://en.wikipedia.org/wiki/Special:Search?search={searchTerms}',
  },
  {
    name: 'Perplexity',
    searchUrl: 'https://www.perplexity.ai/search?q={searchTerms}',
  }
];

// Get search engines from storage or use defaults
function getSearchEngines(callback) {
  chrome.storage.sync.get(['searchEngines'], (result) => {
    if (result.searchEngines && Array.isArray(result.searchEngines)) {
      callback(result.searchEngines);
    } else {
      callback(DEFAULT_ENGINES);
    }
  });
}

// Add a new search engine
function addSearchEngine(name, searchUrl, callback) {
  getSearchEngines((engines) => {
    engines.push({ name, searchUrl });
    chrome.storage.sync.set({ searchEngines: engines }, () => {
      if (callback) callback();
    });
  });
}

// Create context menu for each search engine
function createContextMenus() {
  chrome.contextMenus.removeAll(() => {
    // Use a small timeout to ensure menus are cleared before creating new ones
    setTimeout(() => {
      getSearchEngines((engines) => {
        engines.forEach((engine) => {
          chrome.contextMenus.create({
            id: engine.name,
            title: `Search with ${engine.name}`,
            contexts: ["selection"]
          });
        });
      });
    }, 100);
  });
}

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId && info.selectionText) {
    getSearchEngines((engines) => {
      const engine = engines.find(e => e.name === info.menuItemId);
      if (engine) {
        const url = engine.searchUrl.replace('{searchTerms}', encodeURIComponent(info.selectionText));
        chrome.tabs.create({ url });
      }
    });
  }
});

// Re-create context menus only on install or update
chrome.runtime.onInstalled.addListener(() => {
  createContextMenus();
});
