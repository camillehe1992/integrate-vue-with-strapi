<template>
  <div class="text-center">
    <v-btn variant="text" class="text-none" stacked @click="dialog = true">
      <v-badge color="error" :content="totalCount">
        <v-icon color="primary" size="large">mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card class="mx-auto">
        <v-card-item>
          <v-card-title>Your Cart</v-card-title>
          <v-card-subtitle>
            <p v-show="!products.length">Please add some products to cart.</p>
          </v-card-subtitle>
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
                <v-btn variant="plain" size="small" icon="mdi-minus"></v-btn>
                <v-chip class="ma-2" label> {{ product.quantity }} </v-chip>
                <v-btn variant="plain" size="small" icon="mdi-plus"></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-item>
          <div class="d-flex align-center">
            <p class="me-auto pa-4">Total: {{ currency(total) }}</p>
            <v-btn color="primary" :disabled="!products.length" @click="checkout(products)"> Checkout </v-btn>
          </div>
          <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import {currency} from "../../api/currency";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
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
  },
};
</script>

<style lang=""></style>
