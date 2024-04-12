import {createStore, createLogger} from "vuex";

import auth from "./modules/auth";
import book from "./modules/book";
import cart from "./modules/cart";
import event from "./modules/event";
import products from "./modules/products";
import restaurant from "./modules/restaurant";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    book,
    cart,
    event,
    products,
    restaurant,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
