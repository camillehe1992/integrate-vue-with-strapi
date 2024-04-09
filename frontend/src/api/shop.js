const HEADERS = {"Content-Type": "application/json"};

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) return resp;
  return this.parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

export default {
  async getProducts() {
    try {
      const response = await fetch("http://localhost:1337/api/products?populate=*", {
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
