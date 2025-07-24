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
  const selectAllCheckbox = document.getElementById('selectAllCheckbox');

  let selectedEngines = [SEARCH_ENGINES[0]]; // Google is the default

  // --- FUNCTIONS ---

  /**
   * Renders the search engine buttons.
   */
  function renderEngineButtons() {
    engineSelector.innerHTML = ''; // Clear existing buttons
    SEARCH_ENGINES.forEach(engine => {
      const container = document.createElement('div');
      container.className = 'engine-container';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = engine.name;
      checkbox.value = engine.name;
      checkbox.checked = selectedEngines.some(e => e.name === engine.name);

      const button = document.createElement('button');
      button.className = 'engine-btn';
      button.innerHTML = `<img src="${engine.icon}" alt="${engine.name}"><span>${engine.name}</span>`;

      if (selectedEngines.some(e => e.name === engine.name)) {
        button.classList.add('active');
      }

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          selectedEngines.push(engine);
        } else {
          selectedEngines = selectedEngines.filter(e => e.name !== engine.name);
        }
        renderEngineButtons();
      });

      container.appendChild(checkbox);
      container.appendChild(button);
      engineSelector.appendChild(container);
    });
  }

  /**
   * Performs the search and loads results in new tabs.
   */
  function performSearch() {
    const query = queryInput.value.trim();
    if (!query || selectedEngines.length === 0) return;

    selectedEngines.forEach(engine => {
      const url = engine.searchUrl.includes('{searchTerms}')
        ? engine.searchUrl.replace('{searchTerms}', encodeURIComponent(query))
        : engine.searchUrl;

      chrome.tabs.create({ url });
    });
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

  // Select/deselect all engines
  selectAllCheckbox.addEventListener('change', () => {
    if (selectAllCheckbox.checked) {
      selectedEngines = [...SEARCH_ENGINES];
    } else {
      selectedEngines = [];
    }
    renderEngineButtons();
  });

  // --- INITIALIZATION ---
  renderEngineButtons(); // Set initial state
});
