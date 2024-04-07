import {createStore, createLogger} from "vuex";

import book from "./modules/book";
import cart from "./modules/cart";
import products from "./modules/products";
import restaurants from "./modules/restaurants";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    book,
    cart,
    products,
    restaurants,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
