export class VanillaTab3 {
  constructor(div, name) {
    this._div = div;

    this._name = name;

    VanillaTab3.I = this;

    this.init();
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

    ihtml[idx++] = "<p>";
    ihtml[idx++] = "Tab Content 3";
    ihtml[idx++] = "</p>";

    return ihtml.join("");
  }
}
