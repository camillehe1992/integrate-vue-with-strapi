import {createStore, createLogger} from "vuex";

import cart from "./modules/cart";
import products from "./modules/products";
import restaurants from "./modules/restaurants";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    cart,
    products,
    restaurants,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
