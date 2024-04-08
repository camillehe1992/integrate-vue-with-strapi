<template lang="">
  <v-card class="mx-auto" height="400">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title d-flex class="text-subtitle-2 font-weight-bold">{{ restaurant.name }}</v-card-title>

      <v-chip v-for="category in restaurant.categories.data" :key="category.id" class="ma-2" label>
        {{ category.attributes.name }}
      </v-chip>
    </v-card-item>
    <v-card-text> {{ restaurant.description }} </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "RestaurantCard",
  props: {
    restaurant: Object,
  },
};
</script>
<style lang=""></style>
