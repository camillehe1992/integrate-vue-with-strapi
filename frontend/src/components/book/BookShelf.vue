<template lang="">
  <v-container fluid class="pa-6">
    <v-data-iterator :items="books" :items-per-page="8">
      <template v-slot:default="{items}">
        <v-row>
          <v-col cols="auto" v-for="item in items" :key="item.id">
            <BookCard :book="item.raw" />
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer="{page, pageCount, prevPage, nextPage}">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
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
