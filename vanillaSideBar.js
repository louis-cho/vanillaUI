export class VanillaSideBar {
    constructor(div, name) {
      this._div = div;
  
      this._name = name;
  
      VanillaSideBar.I = this;
  
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
  
      ihtml[idx++] = "<aside class=\"side-bar\">";
      ihtml[idx++] = "  <section class=\"side-bar__icon-box\">";
      ihtml[idx++] = "    <section class=\"side-bar__icon-1\">";
      ihtml[idx++] = "      <div></div>";
      ihtml[idx++] = "      <div></div>";
      ihtml[idx++] = "      <div></div>";
      ihtml[idx++] = "    </section>";
      ihtml[idx++] = "  </section>";
      ihtml[idx++] = "  <ul>";
      ihtml[idx++] = "    <li>";
      ihtml[idx++] = "      <a href=\"#\"><i class=\"fa-solid fa-cat\"></i> menu1</a>";
      ihtml[idx++] = "      <ul>";
      ihtml[idx++] = "        <li><a href=\"#\">text1</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text2</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text3</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text4</a></li>";
      ihtml[idx++] = "      </ul>";
      ihtml[idx++] = "    </li>";
      ihtml[idx++] = "    <li>";
      ihtml[idx++] = "      <a href=\"#\">menu2</a>";
      ihtml[idx++] = "      <ul>";
      ihtml[idx++] = "        <li><a href=\"#\">text1</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text2</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text3</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text4</a></li>";
      ihtml[idx++] = "      </ul>";
      ihtml[idx++] = "    </li>";
      ihtml[idx++] = "    <li>";
      ihtml[idx++] = "      <a href=\"#\">menu3</a>";
      ihtml[idx++] = "      <ul>";
      ihtml[idx++] = "        <li><a href=\"#\">text1</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text2</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text3</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text4</a></li>";
      ihtml[idx++] = "      </ul>";
      ihtml[idx++] = "    </li>";
      ihtml[idx++] = "    <li>";
      ihtml[idx++] = "      <a href=\"#\">menu4</a>";
      ihtml[idx++] = "      <ul>";
      ihtml[idx++] = "        <li><a href=\"#\">text1</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text2</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text3</a></li>";
      ihtml[idx++] = "        <li><a href=\"#\">text4</a></li>";
      ihtml[idx++] = "      </ul>";
      ihtml[idx++] = "    </li>";
      ihtml[idx++] = "  </ul>";
      ihtml[idx++] = "</aside>";
      
  
      return ihtml.join("");
    }
  }
  