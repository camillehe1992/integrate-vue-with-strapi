<template lang="">
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="restaurant in restaurants" :key="restaurant.id">
        <RestaurantCard :restaurant="restaurant.attributes" :restaurantId="restaurant.id" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from "vuex";
import RestaurantCard from "./RestaurantCard.vue";
export default {
  name: "RestaurantList",
  components: {
    RestaurantCard,
  },
  computed: mapState({
    restaurants: (state) => state.restaurant.all,
  }),
  created() {
    this.$store.dispatch("restaurant/getAllRestaurants");
  },
};
</script>
<style lang=""></style>
