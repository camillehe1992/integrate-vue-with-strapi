<template lang="">
  <v-container no-gutters>
    <v-data-iterator :items="books" :items-per-page="8" :loading="loading" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{items}">
        <v-row dense>
          <v-col cols="6" v-for="item in items" :key="item.id">
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
    return {
      search: "",
      loading: false,
    };
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  async mounted() {
    this.loading = true;
    if (!this.books.length) {
      await this.$store.dispatch("book/getAllBooks");
    }
    this.loading = false;
  },
};
</script>
<style lang=""></style>
