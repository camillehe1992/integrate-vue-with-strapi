<template>
  <v-card variant="tonal" color="primary" :to="'/book/' + book.id">
    <div class="d-flex">
      <v-avatar class="ma-3" rounded="0" size="100">
        <v-img :src="book.image_medium"> </v-img>
      </v-avatar>
      <v-container>
        <v-row dense>
          <v-col class="text-caption font-weight-bold flex-wrap">{{ book.title }}</v-col>
        </v-row>
        <v-row dense>
          <v-col class="text-caption">Author : {{ book.authors }}</v-col>
        </v-row>
        <v-row dense>
          <v-col cols="auto">
            <v-rating
              :model-value="book.average_rating_rounded"
              active-color="yellow-accent-4"
              density="comfortable"
              size="x-small"
              half-increments
              readonly
            ></v-rating>
          </v-col>
          <v-col>
            <span class="text-caption pa-0">({{ book.ratings_count }})</span>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "RestaurantCard",
  props: {
    book: Object,
  },
};
</script>
<style lang="scss"></style>
