<template lang="">
  <div id="restaurant">
    <h1>Restaurant Example</h1>
    <hr />
    <h2>Restaurants</h2>
    <RestaurantList />
    <hr />
    <AddRestaurant />
  </div>
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
