import { VanillaDialog } from "./vanillaDialog.js";
import { VanillaSideBar } from "./vanillaSideBar.js";
import { VanillaTab } from "./vanillaTab.js";

export class VanillaApp {
  constructor(div, name) {
    this._div = div;

    this._name = name;

    this.init();

    this._div_dialog = document.getElementById(this._name + "_div_dialog");

    this._div_tab = document.getElementById(this._name + "_div_tab");

    this._div_sidebar = document.getElementById(this._name + "_div_side_bar");

    this._dialog = new VanillaDialog(this._div_dialog, this._name);

    // this._tab = new VanillaTab(this._div_tab, this._name);

    this._sidebar = new VanillaSideBar(this._div_sidebar, this._name);
  }

  init() {
    let innerHTML = this._createHTML();
    this._appendHTML(innerHTML);
  }

  _appendHTML(innerHTML) {
    this._div.innerHTML = innerHTML;
  }

  _createHTML() {
    let name = this._name;
    let ihtml = [];
    let idx = 0;

    ihtml[idx++] = "<div id='" + name + "_div_menu_bar'>";
    ihtml[idx++] = "</div>";

    ihtml[idx++] = "<div id='" + name + "_div_nav_bar'>";
    ihtml[idx++] = "</div>";

    ihtml[idx++] = "<div id='" + name + "_div_side_bar'>";
    ihtml[idx++] = "</div>";

    ihtml[idx++] = "<div id='" + name + "_div_tab'>";
    ihtml[idx++] = "</div>";

    ihtml[idx++] = "<div id='" + name + "_div_dialog'>";
    ihtml[idx++] = "</div>";

    return ihtml.join("");
  }
}
