<template lang="">
  <v-sheet class="pa-2 ma-2">
    <div :id="id" :style="style"></div>
  </v-sheet>
</template>
<script>
export default {
  name: "StackedBarChart",
  props: {
    id: {
      type: String,
      required: true,
    },
    option: {
      type: Object,
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
    window.onresize = function () {
      this.chart.resize();
    };
  },
  methods: {
    initCharts() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option);
    },
  },
};
</script>
<style lang="scss"></style>
