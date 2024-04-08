<template lang="">
  <v-card height="320">
    <v-card-item>
      <v-card-title>{{ restaurant.name }}</v-card-title>
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
