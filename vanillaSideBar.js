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

    ihtml[idx++] = "<aside class='side-bar primiary-color'>";
    ihtml[idx++] = "  <section class='side-bar__icon-box'>";
    ihtml[idx++] = "    <section class='side-bar__icon-1'>";
    ihtml[idx++] = "      <div></div>";
    ihtml[idx++] = "      <div></div>";
    ihtml[idx++] = "      <div></div>";
    ihtml[idx++] = "    </section>";
    ihtml[idx++] = "  </section>";
    ihtml[idx++] = "  <ul>";

    ihtml[idx++] =
      "    <li><a href='#' class='item'><div>프로필</div></a></li>";
    ihtml[idx++] =
      "    <li><a href='#' class='item'><div>데이터사용량</div></a></li>";
    ihtml[idx++] = "    <li><a href='#' class='item'><div>내URL</div></a></li>";
    ihtml[idx++] =
      "    <li><a href='#' class='item'><div>구매내역</div></a></li>";
    ihtml[idx++] =
      "    <li><a href='#' class='item'><div>추천목록</div></a></li>";
    ihtml[idx++] = "    <li><a href='#' class='item'><div>설정</div></a></li>";

    ihtml[idx++] = "  </ul>";
    ihtml[idx++] = "</aside>";

    return ihtml.join("");
  }
}
