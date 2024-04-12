<template lang="">
  <v-card>
    <v-container v-if="book" fluid>
      <v-row>
        <v-col>
          <v-btn to="/book" icon="mdi-arrow-left" color="primary" variant="tonal" size="small"> </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-img :src="book.image" cover> </v-img>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col>
              <div class="text-h6 font-weight-bold">{{ book.title }}</div>
              <div v-if="book.original_title">Original Title: {{ book.original_title }}</div>
              <div v-if="book.original_series">Original Series: {{ book.original_series }}</div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-row class="mx-0">
                <v-rating
                  :model-value="book.average_rating_rounded"
                  color="amber"
                  density="compact"
                  size="small"
                  half-increments
                  readonly
                ></v-rating>
                <div class="text-grey ms-4">{{ book.average_rating }} ({{ book.ratings_count }})</div>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-icon color="info" icon="mdi-clock"></v-icon>
              <span class="text-subtitle-1 font-weight-bold ma-2">ISBN</span>
              <br />
              <span class="text-body-2 ma-2">{{ book.isbn }}</span>
            </v-col>
            <v-col>
              <v-icon color="info" icon="mdi-clock"></v-icon>
              <span class="text-subtitle-1 font-weight-bold ma-2">Books Count</span>
              <br />
              <span class="text-body-2 ma-2">{{ book.books_count }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-icon color="info" icon="mdi-clock"></v-icon>
              <span class="text-subtitle-1 font-weight-bold ma-2">Original Publish Year</span>
              <br />
              <span class="text-body-2 ma-2">{{ book.original_publication_year }}</span>
            </v-col>
            <v-col>
              <v-icon color="info" icon="mdi-clock"></v-icon>
              <span class="text-subtitle-1 font-weight-bold ma-2">Language</span>
              <br />
              <span class="text-body-2 ma-2">{{ book.language_code }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-icon color="info" icon="mdi-account"></v-icon>
              <span class="text-subtitle-1 font-weight-bold ma-2">Authors</span>
              <br />
              <span class="text-body-2 ma-2">{{ book.authors }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "SingleBook",
  data() {
    return {
      book: null,
    };
  },
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters("book", {
      getBookById: "getBookById",
    }),
  },
  async created() {
    await this.$store.dispatch("book/getAllBooks");
    this.book = this.getBookById(this.id);
  },
};
</script>
<style lang=""></style>
