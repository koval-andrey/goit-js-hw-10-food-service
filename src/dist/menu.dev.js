"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.menuCards = exports.menuList = void 0;

var _templates = _interopRequireDefault(require("./templates/templates.hbs"));

var _menu = _interopRequireDefault(require("./menu.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_menu["default"]);
var markup = (0, _templates["default"])(_menu["default"]);
var menuList = document.querySelector(".js-menu");
exports.menuList = menuList;
var menuCards = createMenuCards(_menu["default"]);
exports.menuCards = menuCards;

var _default = menuList.insertAdjacentHTML("beforeend", markup);

exports["default"] = _default;

function createMenuCards(cards) {
  return cards.map(_templates["default"]).join(" ");
}