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
  async createCategory({ commit }, payload) {
    try {
      const response = await fetch.post("categories", payload);
      commit("setCategory", response);
    } catch (error) {
      console.error(error);
    }
  },
  async updateCategory({ commit }, payload) {
    try {
      await fetch.put(`categories/${payload?.id}`, payload);
      commit("", {});
    } catch (error) {
      console.error(error);
    }
  },
  async deleteCategory({ commit }, payload) {
    try {
      const response = await fetch.delete(`categories/${payload?.id}`, payload);
      commit("removeCategory", response);
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
  setCategory(state, payload) {
    state.all.unshift(payload);
  },
  removeCategory(state, payload) {
    const index = state.all.findIndex((entry) => entry.id == payload.id);
    state.all.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
