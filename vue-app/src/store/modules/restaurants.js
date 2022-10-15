import fetch from "../../api/fetchWrapper";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {};

// actions
const actions = {
  async listRestaurants({ commit }) {
    try {
      const response = await fetch.get("restaurants?populate=*");
      commit("setRestaurants", response);
    } catch (error) {
      console.error(error);
    }
  },
};

// mutations
const mutations = {
  setRestaurants(state, payload) {
    state.all = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
