<template lang="">
  <v-container fluid class="pa-6">
    <v-row>
      <v-col cols="3" v-for="book in books" :key="book.id">
        <BookCard :book="book" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from "vuex";
import BookCard from "./BookCard.vue";
export default {
  components: {
    BookCard,
  },
  data() {
    return {};
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  created() {
    this.$store.dispatch("book/getAllBooks");
  },
};
</script>
<style lang=""></style>
