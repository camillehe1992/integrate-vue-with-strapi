<template lang="">
  <v-card class="mx-auto" :to="'/restaurant/' + restaurantId">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" height="160" :src="apiUrl + restaurant.image.data.attributes.url" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title class="text-subtitle-2 font-weight-bold">{{ restaurant.name }}</v-card-title>
      <!-- <v-chip v-for="category in restaurant.categories.data" :key="category.id" size="small" color="primary" label>
        {{ category.attributes.name }}
      </v-chip> -->
    </v-card-item>
    <v-card-item>
      <v-icon color="primary" icon="mdi-clock"></v-icon>
      <span class="text-body-2 ma-2">{{ restaurant.openingHours.hours }}</span>
      <span class="text-body-2 ma-2">{{ restaurant.openingHours.days }}</span>
    </v-card-item>
  </v-card>
</template>
<script>
export default {
  name: "RestaurantCard",
  data() {
    return {
      apiUrl: process.env.VUE_APP_BACKEND_API_HOST,
    };
  },
  props: {
    restaurantId: Number,
    restaurant: Object,
  },
};
</script>
<style lang=""></style>
