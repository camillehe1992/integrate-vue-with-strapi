<template lang="">
  <v-sheet class="pa-2 ma-2">
    <v-data-table density="compact" :items-per-page="itemsPerPage" :headers="headers" :items="items"></v-data-table>
  </v-sheet>
</template>
<script>
export default {
  name: "TabelChart",
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 5,
    },
    headers: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
