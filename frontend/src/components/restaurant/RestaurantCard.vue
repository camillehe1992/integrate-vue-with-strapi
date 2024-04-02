<template lang="">
  <v-card color="indigo-accent-1" max-width="344" min-height="200" hover>
    <v-card-item>
      <v-card-title>{{ restaurant.name }}</v-card-title>
      <v-chip v-for="(category, index) in restaurant.categories.data" :key="index" class="ma-2" label>
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
