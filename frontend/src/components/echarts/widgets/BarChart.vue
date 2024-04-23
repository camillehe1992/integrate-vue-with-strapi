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
    option: {
      type: Object,
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
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initCharts();
    // debounce(2000, this.resizeChart)();
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.showLoading();
      this.option.xAxis.data = this.dataset.map((val) => val.name);
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
