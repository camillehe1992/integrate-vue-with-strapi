<template>
  <v-card class="mx-auto">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" cover> </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title d-flex class="text-subtitle-2 font-weight-bold">{{ product.title }}</v-card-title>
      {{ currency(product.price) }}
    </v-card-item>
    <v-card-actions>
      <v-btn variant="outlined" :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</v-btn>
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
