import menuItem from "./themes";
console.log(menuItem);

import menu from "./menu.json";

export const menuList = document.querySelector(".js-menu");
export const menuCards = createMenuCards(menu);

export default menuList.insertAdjacentHTML("beforeend", menuCards);

function createMenuCards(menu) {
  return menu.map(menuItem).join("");
}
