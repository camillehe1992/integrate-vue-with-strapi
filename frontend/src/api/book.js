import BOOKS from "./books.json";

const _books = BOOKS;

export default {
  async getBooks() {
    return _books.slice(0, 100);
  },
};
