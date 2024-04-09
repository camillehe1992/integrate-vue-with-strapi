<template lang="">
  <v-card class="mx-auto" height="400">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" height="160" :src="apiUrl + restaurant.image.data.attributes.url" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title d-flex class="text-subtitle-2 font-weight-bold">{{ restaurant.name }}</v-card-title>

      <v-chip v-for="category in restaurant.categories.data" :key="category.id" size="small" color="primary" label>
        {{ category.attributes.name }}
      </v-chip>
    </v-card-item>
    <v-card-text> {{ restaurant.description }} </v-card-text>
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
    restaurant: Object,
  },
};
</script>
<style lang=""></style>
