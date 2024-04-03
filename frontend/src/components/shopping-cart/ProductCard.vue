<template>
  <v-card color="primary" max-width="344" hover>
    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>
      {{ currency(product.price) }}
    </v-card-item>
    <v-card-actions>
      <v-btn outlined :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from "vuex";
import {currency} from "../../api/currency";
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    currency,
  },
};
</script>
<style lang=""></style>
