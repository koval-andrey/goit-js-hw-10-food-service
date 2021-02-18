
   const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
   
  const bodyRef = document.querySelector('body');
  const switchRef = document.querySelector('#theme-switch-toggle');

  const lightTheme = 'light-theme';
  const savedTheme = localStorage.getItem(lightTheme);
  
  bodyRef.classList.add(theme.LIGHT);
  switchRef.addEventListener('change', onSwitchTheme);
  
  if (savedTheme === '') {
    bodyRef.classList.add(theme.LIGHT);
  }
  if (savedTheme === 'false') {
    bodyRef.classList.remove(theme.LIGHT);
    bodyRef.classList.add(theme.DARK);
    switchRef.checked = true;
  }
  
  function onSwitchTheme() {
    bodyRef.classList.toggle(theme.LIGHT);
    bodyRef.classList.toggle(theme.DARK);
  
    const isInThemeLight = bodyRef.classList.contains(theme.LIGHT);
    localStorage.setItem(lightTheme, isInThemeLight);
  }