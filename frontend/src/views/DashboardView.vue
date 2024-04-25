<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>Dashboard</v-card-title>
      <v-divider></v-divider>
    </v-card-item>
    <v-card-item>
      <div v-if="currentDateTime" align="center" class="text-h3 font-weight-bold">Date: {{ currentDateTime }}</div>
    </v-card-item>
  </v-card>
</template>
<script>
import moment from "moment";
export default {
  name: "DashboardView",
  data() {
    return {
      currentDateTime: null,
    };
  },
  created() {
    this.getCurrentDateTime();
  },
  mounted() {
    setInterval(this.getCurrentDateTime, 1000);
  },
  methods: {
    getCurrentDateTime() {
      this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>
<style lang=""></style>
