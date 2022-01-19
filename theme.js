// Reference: https://fireship.io/snippets/light-dark-mode-theme-css/

// Define which theme should load next
const defaultTheme = 'light';
  
// Load the existing theme from local storage onto the body's class
const theme = localStorage.getItem('theme') || defaultTheme;
const bodyClass = document.body.classList;
theme && bodyClass.add(theme);

// Change the theme according to the selector value
function selectTheme() {
    const current = localStorage.getItem('theme') || defaultTheme;
    const next = document.getElementById('themeSelector').value;
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeSelector').onchange = selectTheme;
