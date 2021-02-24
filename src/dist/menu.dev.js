"use strict";

var _templates = _interopRequireDefault(require("./templates/templates.hbs"));

var _menu = _interopRequireDefault(require("./menu.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_menu["default"]);
var markup = (0, _templates["default"])(_menu["default"]);
var menuList = document.querySelector(".js-menu");
var menuCards = createMenuCards(_menu["default"]);
menuList.insertAdjacentHTML("beforeend", markup);

function createMenuCards(cards) {
  return cards.map(_templates["default"]).join(" ");
}