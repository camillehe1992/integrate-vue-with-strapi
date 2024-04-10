<template>
  <v-card class="mx-auto">
    <v-card-item>
      <div align="center">
        <v-img class="text-white" height="300" :src="apiUrl + product.attributes.image.data.attributes.url" cover>
        </v-img>
      </div>
    </v-card-item>
    <v-card-item>
      <v-card-title d-flex class="text-subtitle-2 font-weight-bold">{{ product.attributes.name }}</v-card-title>
      {{ currency(product.attributes.price) }}
    </v-card-item>
    <v-card-actions>
      <v-btn
        color="primary"
        variant="tonal"
        :disabled="!product.attributes.inventory"
        @click="addProductToCart(product)"
        >Add to cart</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from "vuex";
import {currency} from "../../api/currency";
export default {
  name: "ProductCard",
  data() {
    return {
      apiUrl: process.env.VUE_APP_BACKEND_API_HOST,
    };
  },
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
