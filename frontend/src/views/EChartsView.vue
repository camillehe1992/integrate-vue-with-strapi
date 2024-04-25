<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>Books Dashboard</v-card-title>
      <v-divider></v-divider>
    </v-card-item>
    <v-card-item>
      <BooksPanel />
    </v-card-item>
  </v-card>
</template>
<script>
import BooksPanel from "@/components/echarts/BooksPanel.vue";
export default {
  name: "EChartsView",
  components: {
    BooksPanel,
  },
};
</script>
<style lang="scss"></style>
