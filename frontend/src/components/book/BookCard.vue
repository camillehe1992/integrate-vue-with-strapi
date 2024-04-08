<template>
  <v-card class="mx-auto">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" height="320" :src="book.image" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title d-flex class="text-subtitle-2 font-weight-bold">{{ book.title }}</v-card-title>

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
    <!-- <v-card-item>
      <v-chip color="secondary" label>
        <v-icon icon="mdi-web" start></v-icon>
        {{ book.language_code }}
      </v-chip>
    </v-card-item> -->
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
