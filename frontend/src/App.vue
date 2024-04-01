<template>
  <div id="app">
    <RestaurantView></RestaurantView>
    <ShoppingCartView></ShoppingCartView>
  </div>
</template>

<script>
import RestaurantView from "./views/RestaurantView.vue";
import ShoppingCartView from "./views/ShoppingCartView.vue";

export default {
  name: "App",
  components: {
    RestaurantView,
    ShoppingCartView,
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
