import { Canvas } from "./canvas.js";
import { VanillaTab1 } from "./vanillaTab1.js";
import { VanillaTab2 } from "./vanillaTab2.js";
import { VanillaTab3 } from "./vanillaTab3.js";

export class VanillaTab {
  constructor(div, name) {
    this._div = div;

    this._name = name;

    VanillaTab.I = this;

    this.init();
  }

  init() {
    let innerHTML = this._createHTML();
    this._appendHTML(innerHTML);

    this._div_tab_1 = document.getElementById("tabs-1");
    this._div_tab_2 = document.getElementById("tabs-2");
    this._div_tab_3 = document.getElementById("tabs-3");

    this._tab_1 = new Canvas(this._div_tab_1, this._name);
    this._tab_2 = new VanillaTab2(this._div_tab_2, this._name);
    this._tab_3 = new VanillaTab3(this._div_tab_3, this._name);

    $(this._div).tabs();
  }

  _appendHTML(innerHTML) {
    this._div.innerHTML = innerHTML;
  }

  _createHTML() {
    let name = this._name;
    let ihtml = [];
    let idx = 0;

    ihtml[idx++] = "<ul>";
    ihtml[idx++] = "    <li><a href='#tabs-1'>First Tab</a></li>";
    ihtml[idx++] = "    <li><a href='#tabs-2'>Second Tab</a></li>";
    ihtml[idx++] = "    <li><a href='#tabs-3'>Third Tab</a></li>";
    ihtml[idx++] = "</ul>";
    ihtml[idx++] = "<div id='tabs-1'>";
    ihtml[idx++] = "</div>";
    ihtml[idx++] = "<div id='tabs-2'>";
    ihtml[idx++] = "</div>";
    ihtml[idx++] = "<div id='tabs-3'>";
    ihtml[idx++] = "</div>";

    return ihtml.join("");
  }
}
