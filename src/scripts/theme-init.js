// Theme initialization script - runs before page loads to prevent flash
(function() {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();
