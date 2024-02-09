import { VanillaDialog } from "./vanillaDialog.js";

export class VanillaApp {
    constructor(div, name) {
        
        this._div = div;

        this._name = name;

        this.init();
        
        this._div_dialog = document.getElementById(this._name + "_div_dialog");

        this._dialog = new VanillaDialog(this._div_dialog, this._name);
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

        ihtml[idx++] = "<div id='" + name + "_div_tab'>";
        ihtml[idx++] = "</div>";

        ihtml[idx++] = "<div id='" + name + "_div_dialog'>";
        ihtml[idx++] = "</div>";

        return ihtml.join("");
    }
}