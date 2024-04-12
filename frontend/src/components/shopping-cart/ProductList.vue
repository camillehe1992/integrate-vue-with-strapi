<template lang="">
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from "vuex";
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
<style lang=""></style>
