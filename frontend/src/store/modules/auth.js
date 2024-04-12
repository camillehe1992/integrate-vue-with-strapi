import auth from "@/api/auth";

const state = () => ({
  isLogin: false,
  email: null,
});

const getters = {};

const actions = {
  async login({commit}, payload) {
    try {
      const response = await auth.authenticate(payload);
      console.log("Login successfully!");
      console.log(response);
      commit("setIsLogin", true);
    } catch (error) {
      console.error("Login failed!");
      commit("setIsLogin", false);
    }
  },
  async signup({commit}, payload) {
    try {
      const response = await auth.register(payload);
      console.log("Signup successfully!");
      console.log(response);
      commit("setEmail", response.email);
    } catch (error) {
      console.error("Signup failed!");
    }
  },
};

const mutations = {
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
  setEmail(state, email) {
    state.email = email;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
