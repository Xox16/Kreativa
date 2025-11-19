document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const dropdownItems = document.querySelectorAll('.dropdown-item[data-mode]');

  function applyMode(mode) {
    body.classList.remove('light-mode', 'dark-mode');
    
    if (mode === 'light') {
      body.classList.add('light-mode');
    } else if (mode === 'dark') {
      body.classList.add('dark-mode');
    } else if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        body.classList.add('dark-mode');
      } else {
        body.classList.add('light-mode');
      }
    }
  }

  const savedMode = localStorage.getItem('theme-mode') || 'auto';
  applyMode(savedMode);

  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = e.target.getAttribute('data-mode');
      localStorage.setItem('theme-mode', mode);
      applyMode(mode);
    });
  });
});
