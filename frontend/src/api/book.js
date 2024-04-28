import BOOKS from "./books.json";
import * as R from "ramda";
// import {wait} from "@/utils/helpers";

const _books = BOOKS;

const removeBooksWithDuplicateId = (books) => R.uniqBy((x) => x.id, books);

export default {
  async getBooks() {
    // await wait(1000);
    return removeBooksWithDuplicateId(_books);
  },
};
