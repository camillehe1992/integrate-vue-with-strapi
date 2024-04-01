<template lang="">
  <v-main class="d-flex align-center justify-center" style="min-height: 300px">
    <RestaurantView />
    <ShoppingCartView />
  </v-main>
</template>
<script>
import RestaurantView from "@/views/RestaurantView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";
export default {
  name: "MainContent",
  components: {
    RestaurantView,
    ShoppingCartView,
  },
};
</script>
<style lang=""></style>
