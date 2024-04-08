<template lang="">
  <v-card>
    <v-card-item>
      <v-card-title>Shopping Cart Example</v-card-title>
      <v-card-subtitle>Products</v-card-subtitle>
      <v-divider></v-divider>
    </v-card-item>
    <ProductList />
  </v-card>
  <ShoppingCart />
</template>

<script>
import ProductList from "@/components/shopping-cart/ProductList.vue";
import ShoppingCart from "@/components/shopping-cart/ShoppingCart.vue";

export default {
  name: "ShoppingCartView",
  components: {
    ProductList,
    ShoppingCart,
  },
};
</script>

<style lang=""></style>
