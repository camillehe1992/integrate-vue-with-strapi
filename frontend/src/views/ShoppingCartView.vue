<template lang="">
  <v-card>
    <v-card-item>
      <v-row align="center">
        <v-col col="10">
          <v-card-title>Shopping Cart Example</v-card-title>
          <v-card-subtitle>Products</v-card-subtitle>
        </v-col>
        <v-col col="2" class="d-flex flex-row-reverse">
          <v-btn variant="text" class="text-none" to="/cart">
            <v-badge color="error" :content="totalCount">
              <v-icon color="primary" size="large">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card-item>
    <ProductList />
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import ProductList from "@/components/shopping-cart/ProductList.vue";

export default {
  name: "ShoppingCartView",
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters("cart", {
      totalCount: "cartTotalCount",
    }),
  },
};
</script>

<style lang=""></style>
