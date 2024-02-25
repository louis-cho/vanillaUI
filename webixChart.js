export class WebixChart {
  constructor(div, name) {
    this._div = div;

    this._name = name;

    WebixChart.I = this;

    this._chart = null;

    /*
    원하는 타입에 맞게 차트 형태를 변경 후 데이터를 작성하세요
    */
    var data = [
      { sales: "20", sales2: "35", sales3: "55", year: "12" },
      { sales: "40", sales2: "24", sales3: "40", year: "13" },
      { sales: "44", sales2: "20", sales3: "27", year: "14" },
      { sales: "23", sales2: "50", sales3: "43", year: "15" },
      { sales: "21", sales2: "36", sales3: "31", year: "16" },
      { sales: "50", sales2: "40", sales3: "56", year: "17" },
      { sales: "30", sales2: "65", sales3: "75", year: "18" },
      { sales: "90", sales2: "62", sales3: "55", year: "19" },
      { sales: "55", sales2: "40", sales3: "60", year: "20" },
      { sales: "72", sales2: "45", sales3: "54", year: "21" },
    ];

    this.init(data);

    var newData = [
      { sales: "1", sales2: "30", sales3: "55", year: "12" },
      { sales: "1", sales2: "30", sales3: "40", year: "13" },
      { sales: "1", sales2: "30", sales3: "27", year: "14" },
      { sales: "1", sales2: "30", sales3: "43", year: "15" },
      { sales: "1", sales2: "30", sales3: "31", year: "16" },
      { sales: "1", sales2: "30", sales3: "56", year: "17" },
      { sales: "1", sales2: "30", sales3: "75", year: "18" },
      { sales: "1", sales2: "30", sales3: "55", year: "19" },
      { sales: "1", sales2: "30", sales3: "60", year: "20" },
      { sales: "1", sales2: "30", sales3: "54", year: "21" },
    ];

    this.setData(newData);
    this.updateData();
  }

  setData(data) {
    this._data = data;
  }

  updateData() {
    this._chart.clearAll();
    this._chart.parse(this._data);
  }

  init(data) {
    let innerHTML = this._createHTML();
    this._appendHTML(innerHTML);
    this._createChart(data);
  }

  _appendHTML(innerHTML) {
    this._div.innerHTML = innerHTML;
  }

  _createHTML() {
    let name = this._name;
    let ihtml = [];
    let idx = 0;

    ihtml[idx++] =
      "<div id='" +
      name +
      "_webix_chart'style='width:600px;height:270px;margin:20px'>";

    ihtml[idx++] = "</div>";

    return ihtml.join("");
  }

  /*
  원하는 타입에 맞게 차트를 변경하세요
  */
  _createChart(data) {
    this._chart = webix.ui({
      view: "chart",
      container: this._name + "_webix_chart",
      type: "line",

      xAxis: {
        template: "'#year#",
      },
      yAxis: {
        start: 0,
        step: 10,
        end: 100,
      },
      offset: 0,
      legend: {
        values: [
          { text: "Company A" },
          { text: "Company B" },
          { text: "Company C" },
        ],
        align: "right",
        valign: "middle",
        layout: "y",
        width: 100,
        margin: 8,
        marker: {
          type: "item",
          width: 18,
        },
      },
      series: [
        {
          value: "#sales#",
          item: {
            borderColor: "#447900",
            color: "#69ba00",
          },
          line: {
            color: "#69ba00",
            width: 2,
          },
          tooltip: {
            template: "#sales#",
          },
        },
        {
          value: "#sales2#",
          item: {
            borderColor: "#0a796a",
            color: "#4aa397",
            type: "s",
            radius: 4,
          },
          line: {
            color: "#4aa397",
            width: 2,
          },
          tooltip: {
            template: "#sales2#",
          },
        },
        {
          value: "#sales3#",
          item: {
            borderColor: "#b7286c",
            color: "#de619c",
            type: "t",
            radius: 4,
          },
          line: {
            color: "#de619c",
            width: 2,
          },
          tooltip: {
            template: "#sales3#",
          },
        },
      ],
      data: data,
    });
  }
}
