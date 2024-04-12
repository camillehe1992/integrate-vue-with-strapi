import {HEADERS, API_URL, checkStatus, parseJSON} from "./common.js";

export default {
  async getProducts() {
    try {
      const response = await fetch(API_URL + "/products?populate=*", {
        method: "GET",
        headers: HEADERS,
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("getProducts", response);
      return response?.data;
    } catch (error) {
      console.error("getProducts", error);
      throw error;
    }
  },

  async buyProducts() {
    await wait(100);
    if (
      // simulate random checkout failure.
      Math.random() > 0.5 ||
      navigator.webdriver
    ) {
      return;
    } else {
      throw new Error("Checkout error");
    }
  },
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
