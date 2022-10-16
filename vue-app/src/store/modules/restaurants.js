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

  async createRestaurant({ commit }, payload) {
    try {
      const response = await fetch.post("restaurants", payload);
      commit("setRestaurant", response);
    } catch (error) {
      console.error(error);
    }
  },
  async updateRestaurant({ commit }, payload) {
    try {
      await fetch.put(`restaurants/${payload?.id}`, payload);
      commit("", {});
    } catch (error) {
      console.error(error);
    }
  },
  async deleteRestaurant({ commit }, payload) {
    try {
      const response = await fetch.delete(
        `restaurants/${payload?.id}`,
        payload
      );
      commit("removeRestaurant", response);
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
  setRestaurant(state, payload) {
    state.all.unshift(payload);
  },
  removeRestaurant(state, payload) {
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
