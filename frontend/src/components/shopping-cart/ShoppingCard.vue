<template>
  <v-card class="mx-auto">
    <v-card-item>
      <v-card-title>Your Cart</v-card-title>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-item>
      <p v-show="!products.length">Please add some products to cart.</p>
    </v-card-item>
    <v-card-item>
      <v-list :items="items" lines="two" item-props>
        <v-list-item
          v-for="product in products"
          :key="product.id"
          :subtitle="currency(product.price)"
          :title="product.name"
        >
          <template v-slot:append>
            <v-btn variant="plain" size="small" icon="mdi-minus" @click="decrementItemQuantity(product)"></v-btn>
            <v-chip class="ma-2" label> {{ product.quantity }} </v-chip>
            <v-btn
              variant="plain"
              size="small"
              icon="mdi-plus"
              :disabled="noInventory(product)"
              @click="incrementItemQuantity(product)"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-item>
      <div class="d-flex align-center">
        <p class="me-auto pa-4">Total: {{ currency(total) }}</p>
        <v-btn variant="outlined" class="ma-3" color="primary" to="/shopping"> Cancel </v-btn>
        <v-btn variant="outlined" color="primary" :disabled="!products.length" @click="checkout(products)">
          Checkout
        </v-btn>
      </div>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </v-card-item>
  </v-card>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import {currency} from "../../api/currency";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
      allProducts: (state) => state.products.all,
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
      totalCount: "cartTotalCount",
    }),
  },
  methods: {
    currency,
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
    incrementItemQuantity(product) {
      const findProduct = this.allProducts.find((item) => item.id == product.id);
      if (findProduct) {
        this.$store.dispatch("cart/addProductToCart", findProduct);
      }
    },
    decrementItemQuantity(product) {
      const findProduct = this.allProducts.find((item) => item.id == product.id);
      this.$store.dispatch("cart/reduceProductFromCart", findProduct);
    },
    noInventory(product) {
      const findProduct = this.allProducts.find((item) => item.id == product.id);
      return findProduct.attributes.inventory == 0;
    },
  },
};
</script>

<style lang=""></style>
