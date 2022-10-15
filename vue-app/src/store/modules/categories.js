import fetch from "../../api/fetchWrapper";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {};

// actions
const actions = {
  async listCategories({ commit }) {
    try {
      const response = await fetch.get("categories");
      commit("setCategories", response);
    } catch (error) {
      console.error(error);
    }
  },
};

// mutations
const mutations = {
  setCategories(state, payload) {
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
