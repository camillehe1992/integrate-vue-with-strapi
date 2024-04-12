import restaurant from "@/api/restaurant";

const state = () => ({
  all: [],
  allCategories: [],
  newRestaurant: null,
});

const getters = {
  getRestaurantById: (state) => (id) => {
    return state.all.find((restaurant) => restaurant.id == id);
  },
};

const actions = {
  async getAllRestaurants({commit}) {
    const restaurants = await restaurant.getRestaurants();
    commit("setRestaurants", restaurants);
  },

  async createRestaurant(payload) {
    await restaurant.createRestaurant(payload);
  },

  async getAllCategories({commit}) {
    const categories = await restaurant.getCategories();
    commit("setAllCategories", categories);
  },
};

const mutations = {
  setRestaurants(state, restaurants) {
    state.all = restaurants;
  },
  setAllCategories(state, categories) {
    state.allCategories = categories;
  },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};
