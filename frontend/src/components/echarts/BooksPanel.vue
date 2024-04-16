<template lang="">
  <v-container fuild class="border">
    <v-row>
      <v-col class="text-subtitle-1 font-weight-bold"> Books Panel </v-col>
      <v-col class="d-flex flex-row-reverse text-body-2">Date: {{ currentDateTime }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <BarChart />
      </v-col>
      <v-col>
        <PieChart />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import moment from "moment";
import BarChart from "@/components/echarts/BarChart.vue";
import PieChart from "@/components/echarts/PieChart.vue";
export default {
  name: "EChartsView",
  components: {
    BarChart,
    PieChart,
  },
  data() {
    return {
      currentDateTime: null,
    };
  },
  mounted() {
    this.currentDateTime = moment().format();
  },
};
</script>
<style lang=""></style>
