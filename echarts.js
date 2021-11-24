import * as echarts from "echarts";

class BarChart {
  constructor(el) {
    this.el = el;
    this.bar_chart = echarts.init(this.el);
    this.setup();
  }

  setup() {
    this.bar_chart.setOption({
      title: {
        text: "ECharts Getting Started Example"
      },
      tooltip: {},
      xAxis: {
        data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
      },
      yAxis: {},
      series: [
        {
          name: "sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const chart_container = document.querySelector("#main");
  const echart = new BarChart(chart_container);
});
