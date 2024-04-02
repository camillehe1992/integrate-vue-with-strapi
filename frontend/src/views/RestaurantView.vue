<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>Restaurant Example</v-card-title>
      <v-card-subtitle>Restaurants</v-card-subtitle>
    </v-card-item>
    <RestaurantList />
  </v-card>
  <AddRestaurant />
</template>
<script>
import RestaurantList from "@/components/restaurant/RestaurantList.vue";
import AddRestaurant from "@/components/restaurant/AddRestaurant.vue";

export default {
  name: "RestaurantView",
  components: {
    RestaurantList,
    AddRestaurant,
  },
};
</script>
<style lang=""></style>
