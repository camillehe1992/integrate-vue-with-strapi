<template>
  <v-card variant="tonal" color="primary" :to="'/book/' + book.id">
    <div class="d-flex flex-no-wrap">
      <v-avatar class="ma-3" rounded="0" size="100">
        <v-img :src="book.image_medium"> </v-img>
      </v-avatar>
      <div>
        <v-card-title class="text-h6 font-weight-bold"> {{ book.title }} </v-card-title>
        <v-card-subtitle>Author : {{ book.authors }}</v-card-subtitle>
        <v-card-text>
          <v-rating
            :model-value="book.average_rating_rounded"
            color="amber"
            density="comfortable"
            size="x-small"
            half-increments
            readonly
          ></v-rating>
        </v-card-text>
      </div>
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
<style lang=""></style>
