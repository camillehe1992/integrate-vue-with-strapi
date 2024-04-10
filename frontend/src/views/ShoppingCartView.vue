<template lang="">
  <v-card>
    <v-card-item>
      <v-row align="center">
        <v-col col="10">
          <v-card-title>Shopping Cart Example</v-card-title>
          <v-card-subtitle>Products</v-card-subtitle>
        </v-col>
        <v-col col="2" class="d-flex flex-row-reverse">
          <ShoppingCart />
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card-item>
    <ProductList />
  </v-card>
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
