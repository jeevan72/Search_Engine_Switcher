// Define search engines with icons and URLs
const SEARCH_ENGINES = [
  { 
    name: 'Google', 
    searchUrl: 'https://www.google.com/search?q={searchTerms}',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`
  },
  { 
    name: 'ChatGPT', 
    searchUrl: 'https://chat.openai.com/?q={searchTerms}',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#10A37F" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829 14.6182 7.21a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#fff"/></svg>`
  },
  {
    name: 'Claude',
    searchUrl: 'https://claude.ai/new?q={searchTerms}',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#E88B5D" d="M12 2l2.4 1.4L16.7 2l1.4 2.4L21 5.8l-1.4 2.4L21 10.5l-2.4 1.4L18.2 15l-2.4-1.4L13.4 15l-1.4-2.4L9.6 13.9l-1.4-2.4L5.8 13l1.4-2.4L5.8 8.2l2.4-1.4L8.6 4.4l2.4 1.4L13.4 4.4z"/>
      <circle fill="#E88B5D" cx="12" cy="12" r="3"/>
    </svg>`
  },
  { 
    name: 'YouTube', 
    searchUrl: 'https://www.youtube.com/results?search_query={searchTerms}',
    icon: `<svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.4,3.05C27.1,1.85,26.1,0.9,24.9,0.6C22.7,0,14,0,14,0S5.3,0,3.1,0.6C1.9,0.9,0.9,1.85,0.6,3.05C0,5.2,0,10,0,10s0,4.8,0.6,7C0.9,18.15,1.9,19.1,3.1,19.4c2.2,0.6,10.9,0.6,10.9,0.6s8.7,0,10.9-0.6c1.2-0.3,2.2-1.25,2.5-2.4C28,14.8,28,10,28,10S28,5.2,27.4,3.05Z" fill="#FF0000"/><path d="M11.2,14.3L18.4,10L11.2,5.7V14.3Z" fill="white"/></svg>`
  },
  { 
    name: 'Wikipedia', 
    searchUrl: 'https://en.wikipedia.org/wiki/Special:Search?search={searchTerms}',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .084-.103.14-.288.166l-.731.049c-.618.042-.799.271-.539.674.26.403.845 1.838 1.119 2.402.272.564 1.962 3.982 1.962 3.982.439-.929 1.33-2.794 1.844-3.891.512-1.097.823-1.829.823-2.147 0-.434-.314-.656-.95-.668l-.761-.045C7.629 5.358 7.52 5.18 7.52 5.11v-.455l.052-.045c1.195-.005 3.582 0 3.582 0l.051.045v.434c0 .084-.098.147-.288.166-.19.019-.424.034-.731.049-.507.042-.823.173-.947.392-.124.22-.062.488.186.805.248.317 1.206 2.244 1.848 3.693.642 1.449 2.359 5.024 2.359 5.024l2.264-4.993c.417-.907.673-1.658.673-2.287 0-.433-.314-.673-.948-.685l-.76-.045c-.253-.019-.363-.196-.363-.267v-.434l.052-.045h4.988l.051.045v.434c0 .084-.103.14-.288.166-.184.026-.417.041-.697.049-.656.042-1.184.253-1.584.63-.399.378-.89 1.401-1.474 2.784-.584 1.383-1.481 3.674-1.481 3.674z"/></svg>`
  },
  { 
    name: 'Perplexity', 
    searchUrl: 'https://www.perplexity.ai/search?q={searchTerms}',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/></svg>`
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
      button.innerHTML = `${engine.icon}<span>${engine.name}</span>`;
      
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
