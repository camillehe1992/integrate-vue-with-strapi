<template>
  <v-container>
    <RestaurantTable :restaurants="restaurants" />
  </v-container>
</template>

<script>
import RestaurantTable from "@/components/restaurant/RestaurantTable.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    RestaurantTable,
  },
  data() {
    return {
      restaurant: {},
    };
  },
  computed: {
    ...mapState({
      restaurants: (state) => state.restaurants.all,
    }),
  },
  methods: {
    ...mapActions("restaurants", [
      "listRestaurants",
      "createRestaurant",
      "updateRestaurant",
    ]),
    gotoDetails: () => {},
  },
  async mounted() {
    await this.listRestaurants();
    this.restaurant = this.restaurants.pop();
  },
};
</script>

<style>
</style>