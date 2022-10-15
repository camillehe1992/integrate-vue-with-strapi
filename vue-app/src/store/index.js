import Vue from "vue";
import Vuex from "vuex";
import restaurants from "./modules/restaurants";
import categories from "./modules/categories";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    restaurants,
    categories,
  },
});
