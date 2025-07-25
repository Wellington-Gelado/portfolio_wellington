 function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('light-mode');

    if (isDark) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }

  // Mantém preferência entre recarregamentos
  window.onload = () => {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    }
  };