import shop from "@/api/shop";

const state = () => ({
  all: [],
});

const getters = {};

const actions = {
  async getAllProducts({commit}) {
    const products = await shop.getProducts();
    commit("setProducts", products);
  },
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, {id}) {
    const product = state.all.find((product) => product.id === id);
    product.attributes.inventory--;
  },
  incrementProductInventory(state, {id}) {
    const product = state.all.find((product) => product.id === id);
    product.attributes.inventory++;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
