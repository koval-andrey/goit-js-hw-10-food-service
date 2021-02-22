import itemTemplate from "./templates/templates.hbs";
import cards from "./menu.json";
console.log(cards);
const markup = itemTemplate(cards);
export const menuList = document.querySelector(".js-menu");
export const menuCards = createMenuCards(cards);
export default menuList.insertAdjacentHTML("beforeend", markup);

function createMenuCards(cards) {
  return cards.map(itemTemplate).join(" ");
}
