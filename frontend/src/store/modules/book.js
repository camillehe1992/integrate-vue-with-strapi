import book from "@/api/book";

const state = () => ({
  all: [],
});

const getters = {
  getBookById: (state) => (id) => {
    return state.all.find((book) => book.id == id);
  },
};

const actions = {
  async getAllBooks({commit}) {
    const books = await book.getBooks();
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
