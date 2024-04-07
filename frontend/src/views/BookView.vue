<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>BookShelf Example</v-card-title>
      <v-card-subtitle>Books</v-card-subtitle>
    </v-card-item>
    <BookShelf />
  </v-card>
</template>
<script>
import BookShelf from "@/components/book/BookShelf.vue";

export default {
  name: "BookView",
  components: {
    BookShelf,
  },
};
</script>
<style lang=""></style>
