
(function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle with localStorage
  const btn = document.querySelector('.theme-toggle');
  const setTheme = (mode) => {
    if (mode === 'light') document.body.classList.add('light');
    else document.body.classList.remove('light');
    try { localStorage.setItem('theme', mode); } catch {}
  };
  const saved = (()=>{ try { return localStorage.getItem('theme'); } catch { return null; }})();
  if (saved) setTheme(saved);
  if (btn) btn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
  });

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
