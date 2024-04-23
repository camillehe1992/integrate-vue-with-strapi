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
    option: {
      type: Object,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
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
