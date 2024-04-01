<template lang="">
  <div id="shopping">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
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
