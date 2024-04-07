import book from "@/api/book";

const state = () => ({
  all: [],
});

const getters = {};

const actions = {
  async getAllBooks({commit}) {
    const books = await book.getBooks();
    console.log(books);
    commit("setBooks", books);
  },
};

const mutations = {
  setBooks(state, books) {
    state.all = books;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
