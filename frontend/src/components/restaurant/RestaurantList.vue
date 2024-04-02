<template lang="">
  <v-container fluid class="pa-6">
    <v-row no-gutters>
      <v-col v-for="restaurant in restaurants" :key="restaurant.id">
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
  data() {
    return {
      error: null,
    };
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
