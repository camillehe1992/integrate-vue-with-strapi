import restaurant from "@/api/restaurant";

const data = () => ({
  all: [],
  allCategories: [],
  newRestaurant: null,
});

const actions = {
  async getAllRestaurants({commit}) {
    const restaurants = await restaurant.getRestaurants();
    commit("setRestaurants", restaurants);
  },

  async createRestaurant({state, commit}, payload) {
    const response = await restaurant.createRestaurant(payload);
    commit("setRestaurants", [response.data, ...state.all]);
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
  data,
  actions,
  mutations,
};
