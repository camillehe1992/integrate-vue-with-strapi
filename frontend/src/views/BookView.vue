<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>BookShelf</v-card-title>
      <v-card-subtitle>The inventory of books</v-card-subtitle>
      <v-divider></v-divider>
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
