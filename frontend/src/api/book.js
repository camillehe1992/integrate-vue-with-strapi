import BOOKS from "./books.json";
import * as R from "ramda";

const _books = BOOKS;

const removeBooksWithDuplicateId = (books) => R.uniqBy((x) => x.id, books);

export default {
  async getBooks() {
    return removeBooksWithDuplicateId(_books);
  },
};
