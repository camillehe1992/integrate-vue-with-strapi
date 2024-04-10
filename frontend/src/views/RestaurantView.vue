<template lang="">
  <v-card>
    <v-card-item>
      <v-row>
        <v-col col="10">
          <v-card-title>Restaurant Example</v-card-title>
          <v-card-subtitle>Restaurants</v-card-subtitle>
        </v-col>
        <v-col col="2" class="d-flex flex-row-reverse">
          <AddRestaurant />
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card-item>
    <RestaurantList />
    <ProductList />
  </v-card>
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
