// Define search engines with icons and URLs
const SEARCH_ENGINES = [
  { 
    name: 'Google', 
    searchUrl: 'https://www.google.com/search?q={searchTerms}',
    icon: 'google.png'
  },
  { 
    name: 'ChatGPT', 
    searchUrl: 'https://chat.openai.com/?q={searchTerms}',
    icon: 'chatgpt.png'
  },
  {
    name: 'Claude',
    searchUrl: 'https://claude.ai/new?q={searchTerms}',
    icon: 'claude.png'
  },
  { 
    name: 'YouTube', 
    searchUrl: 'https://www.youtube.com/results?search_query={searchTerms}',
    icon: 'youtube.png'
  },
  { 
    name: 'Wikipedia', 
    searchUrl: 'https://en.wikipedia.org/wiki/Special:Search?search={searchTerms}',
    icon: 'wikipedia.png'
  },
  { 
    name: 'Perplexity', 
    searchUrl: 'https://www.perplexity.ai/search?q={searchTerms}',
    icon: 'perplexity.png'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENTS ---
  const engineSelector = document.getElementById('engineSelector');
  const queryInput = document.getElementById('queryInput');
  const searchBtn = document.getElementById('searchBtn');

  let activeEngine = SEARCH_ENGINES[0]; // Google is the default

  // --- FUNCTIONS ---

  /**
   * Renders the search engine buttons.
   */
  function renderEngineButtons() {
    engineSelector.innerHTML = ''; // Clear existing buttons
    SEARCH_ENGINES.forEach(engine => {
      const button = document.createElement('button');
      button.className = 'engine-btn';
      button.innerHTML = `<img src="${engine.icon}" alt="${engine.name}"><span>${engine.name}</span>`;
      
      if (engine.name === activeEngine.name) {
        button.classList.add('active');
      }

      button.addEventListener('click', () => {
        setActiveEngine(engine);
      });

      engineSelector.appendChild(button);
    });
  }

  /**
   * Sets the active search engine and updates the UI.
   */
  function setActiveEngine(engine) {
    activeEngine = engine;
    queryInput.placeholder = `Search with ${engine.name}...`;
    renderEngineButtons(); // Re-render to update the 'active' class
    queryInput.focus();
  }

  /**
   * Performs the search and loads results in the iframe.
   */
  function performSearch() {
    const query = queryInput.value.trim();
    if (!query) return;

    const url = activeEngine.searchUrl.includes('{searchTerms}')
      ? activeEngine.searchUrl.replace('{searchTerms}', encodeURIComponent(query))
      : activeEngine.searchUrl;

    chrome.tabs.create({ url });
  }

  // --- EVENT LISTENERS ---

  // Search when the button is clicked
  searchBtn.addEventListener('click', performSearch);

  // Search when the Enter key is pressed
  queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // --- INITIALIZATION ---
  renderEngineButtons(); // Set initial state
});
