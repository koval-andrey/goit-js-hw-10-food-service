import itemTemplate from "./templates/templates.hbs";
import cards from "./menu.json";
console.log(cards);
const markup = itemTemplate(cards);
const menuList = document.querySelector(".js-menu");
const menuCards = createMenuCards(cards);
menuList.insertAdjacentHTML("beforeend", markup);

function createMenuCards(cards) {
  return cards.map(itemTemplate).join(" ");
}
