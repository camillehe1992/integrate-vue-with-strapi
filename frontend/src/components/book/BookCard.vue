<template>
  <v-card class="mx-auto" :to="'/book/' + book.id">
    <v-card-item>
      <div align="center">
        <v-img height="300" :src="book.image_medium" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title class="text-subtitle-2 font-weight-bold">{{ book.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Author : {{ book.authors }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
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
    </v-card-text>
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
<style lang=""></style>
