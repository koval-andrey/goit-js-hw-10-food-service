"use strict";

var theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};
var bodyRef = document.querySelector("body");
var switchRef = document.querySelector("#theme-switch-toggle");
var lightTheme = "light-theme";
var savedTheme = localStorage.getItem(lightTheme);
bodyRef.classList.add(theme.LIGHT);
switchRef.addEventListener("change", onSwitchTheme);

if (savedTheme === "") {
  bodyRef.classList.add(theme.LIGHT);
}

if (savedTheme === "false") {
  bodyRef.classList.remove(theme.LIGHT);
  bodyRef.classList.add(theme.DARK);
  switchRef.checked = true;
}

function onSwitchTheme() {
  bodyRef.classList.toggle(theme.LIGHT);
  bodyRef.classList.toggle(theme.DARK);
  var isInThemeLight = bodyRef.classList.contains(theme.LIGHT);
  localStorage.setItem(lightTheme, isInThemeLight);
}