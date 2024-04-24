<template lang="">
  <v-sheet class="pa-2 ma-2">
    <div :id="id" :style="style"></div>
  </v-sheet>
</template>
<script>
import {debounce} from "@/utils/debounce";
export default {
  name: "BarChart",
  props: {
    id: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    style: {
      type: Object,
      required: false,
      default: () => {
        return {width: "100%", height: "400px"};
      },
    },
    title: {
      type: String,
      required: true,
    },
    xAxisName: {
      type: String,
      required: false,
      default: null,
    },
    yAxisName: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      chart: null,
      option: {
        title: {
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
    debounce(2000, this.resizeChart)();
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.showLoading();
      this.option.title.text = this.title;
      if (this.xAxisName) this.option.xAxis.name = this.xAxisName;
      this.option.xAxis.data = this.dataset.map((val) => val.name);
      if (this.yAxisName) this.option.yAxis.name = this.yAxisName;
      this.option.series[0].data = this.dataset.map((val) => val.value);
      this.chart.setOption(this.option);
      this.chart.hideLoading();
    },
    resizeChart() {
      window.onresize = () => {
        this.chart && this.chart.resize();
      };
    },
  },
};
</script>
<style lang="scss"></style>
