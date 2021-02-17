
   const bodyRef = document.querySelector('body');
  const switchRef = document.querySelector('.js-switch-input');

  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  switchRef.addEventListener('change', setClassList);
  switchRef.addEventListener('change', setLocalStorage);
  
  function setClassList() {
    const onCheck = switchRef.checked;
  
    if (onCheck) {
      bodyRef.classList.add(Theme.DARK);
      bodyRef.classList.remove(Theme.LIGHT);
    } else {
      bodyRef.classList.add(Theme.LIGHT);
      bodyRef.classList.remove(Theme.DARK);
    }
  }
  
  function setLocalStorage() {
    const onCheck = switchRef.checked;
  
    if (onCheck) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  
  const themeInLocal = localStorage.getItem('theme');
  
  if (themeInLocal === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }