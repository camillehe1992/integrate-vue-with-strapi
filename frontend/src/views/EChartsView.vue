<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>E-Charts Example</v-card-title>
      <v-card-subtitle>My Charts</v-card-subtitle>
      <v-divider></v-divider>
    </v-card-item>
    <v-card-item>
      <BooksPanel />
    </v-card-item>
  </v-card>
</template>
<script>
import moment from "moment";
import BooksPanel from "@/components/echarts/BooksPanel.vue";
export default {
  name: "EChartsView",
  components: {
    BooksPanel,
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
<style lang="scss"></style>
