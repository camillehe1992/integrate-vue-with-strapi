<template lang="">
  <v-sheet class="pa-2 ma-2">
    <div id="bar-chart" style="width: 100%; height: 400px"></div>
  </v-sheet>
</template>
<script>
export default {
  name: "BarChart",
  data() {
    return {
      chart: null,
      option: {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
          {
            type: "line",
            name: "line",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
    window.onresize = function () {
      this.chart.resize();
    };
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(document.getElementById("bar-chart"));
      this.chart.setOption(this.option);
    },
  },
};
</script>
<style lang="scss"></style>
