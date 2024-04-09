<template lang="">
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="restaurant in restaurants" :key="restaurant.id">
        <RestaurantCard :restaurant="restaurant.attributes" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from "vuex";
import RestaurantCard from "./RestaurantCard.vue";
export default {
  components: {
    RestaurantCard,
  },
  computed: mapState({
    restaurants: (state) => state.restaurants.all,
  }),
  created() {
    this.$store.dispatch("restaurants/getAllRestaurants");
  },
};
</script>
<style lang=""></style>
