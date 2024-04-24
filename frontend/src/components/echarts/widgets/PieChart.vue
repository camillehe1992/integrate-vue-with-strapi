<template lang="">
  <v-sheet class="pa-2 ma-2">
    <div :id="id" style="height: 400px"></div>
  </v-sheet>
</template>
<script>
import {debounce} from "@/utils/debounce";
export default {
  name: "PieChart",
  props: {
    id: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    seriesName: {
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
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
    debounce(500, this.resizeChart)();
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.showLoading();
      this.option.series[0].data = this.dataset;
      this.option.series[0].name = this.seriesName;
      this.option.title.text = this.title;
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
<style lang=""></style>
