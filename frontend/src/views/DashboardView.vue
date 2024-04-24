<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>E-Charts Example</v-card-title>
      <v-card-subtitle>My Charts</v-card-subtitle>
      <v-divider></v-divider>
    </v-card-item>
    <v-card-item>
      <div v-if="currentDateTime" class="d-flex flex-row-reverse text-body-2 font-weight-bold">
        Date: {{ currentDateTime }}
      </div>
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
