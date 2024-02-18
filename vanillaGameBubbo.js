export class VanillaGameBubbo {
    constructor(div, name) {
      this._div = div;
  
      this._name = name;
  
      VanillaGameBubbo.I = this;
  
      this.init();

      this._div_app = document.getElementById(this._name + "_bubbo");

      this._div_app.appendChild(app.view);
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
  
      ihtml[idx++] = "<div id='" + this._name + "_matcher' class='game'>";

      
      ihtml[idx++] = "</div>";

      return ihtml.join("");
    }
  }
  