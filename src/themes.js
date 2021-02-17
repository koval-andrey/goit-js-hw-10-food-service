
   const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
   
  const bodyRef = document.querySelector('body');
  const switchRef = document.querySelector('.js-switch-input');

  
  
  
  switchRef.addEventListener('change', setClass);
  switchRef.addEventListener('change', addLocalStorage);
  
  function setClass(event) {
    const onCheck = switchRef.checked;
  
    if (onCheck) {
      bodyRef.classList.add(Theme.DARK);
      bodyRef.classList.remove(Theme.LIGHT);
    } else {
      bodyRef.classList.add(Theme.LIGHT);
      bodyRef.classList.remove(Theme.DARK);
    }
  }
  
  function addLocalStorage(event) {
    const onCheck = switchRef.checked;
  
    if (onCheck) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  
  const localTheme = localStorage.getItem('theme');
  
  if (localTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }