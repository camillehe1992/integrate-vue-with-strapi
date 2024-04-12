import {createStore, createLogger} from "vuex";

import auth from "./modules/auth";
import book from "./modules/book";
import cart from "./modules/cart";
import event from "./modules/event";
import products from "./modules/products";
import restaurants from "./modules/restaurants";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    book,
    cart,
    event,
    products,
    restaurants,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
