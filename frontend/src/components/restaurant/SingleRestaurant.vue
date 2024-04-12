<template lang="">
  <v-card>
    <v-container v-if="restaurant" fluid>
      <v-row>
        <v-col>
          <v-btn to="/restaurant" icon="mdi-arrow-left" color="primary" variant="tonal" size="small"> </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-h6 font-weight-bold">{{ restaurant.name }}</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <span class="text-body-2 ma-2">{{ restaurant.description }}</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-icon color="info" icon="mdi-silverware-fork-knife"></v-icon>
          <span class="text-subtitle-1 font-weight-bold ma-2">Categories</span>
          <br />
          <v-chip
            v-for="category in restaurant.categories.data"
            :key="category.id"
            class="ma-2"
            size="small"
            color="primary"
            label
          >
            {{ category.attributes.name }}
          </v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-icon color="info" icon="mdi-clock"></v-icon>
          <span class="text-subtitle-1 font-weight-bold ma-2">Opening Hours</span>
          <br />
          <span class="text-body-2 ma-2">{{ restaurant.openingHours.hours }}</span>
          <span class="text-body-2 ma-2">{{ restaurant.openingHours.days }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "SingleRestaurant",
  data() {
    return {
      restaurant: null,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("restaurant", {
      getRestaurantById: "getRestaurantById",
    }),
  },
  async created() {
    await this.$store.dispatch("restaurant/getAllRestaurants");
    this.restaurant = this.getRestaurantById(this.id).attributes;
  },
};
</script>
<style lang=""></style>
