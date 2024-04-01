<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ currency(product.price) }}
        <br />
        <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import {currency} from "../../api/currency";

export default {
  data() {
    return {
      error: null,
    };
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    currency,
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
