// theme.js
(function () {
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  // Detect system preference
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
  }

  toggleBtn?.addEventListener('click', () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();
