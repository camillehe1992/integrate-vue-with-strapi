const HEADERS = {"Content-Type": "application/json"};

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) return resp;
  return this.parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

export default {
  async getRestaurants() {
    try {
      const response = await fetch("http://localhost:1337/api/restaurants?populate=*", {
        method: "GET",
        headers: HEADERS,
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("getRestaurants", response);
      return response?.data;
    } catch (error) {
      console.error("getRestaurants", error);
      throw error;
    }
  },

  async createRestaurant(restaurantData) {
    try {
      const response = await fetch("http://localhost:1337/api/restaurants?populate=*", {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({data: restaurantData}),
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("createRestaurant", response);
      return response;
    } catch (error) {
      console.error("createRestaurant", error);
      throw error;
    }
  },

  async getCategories() {
    try {
      const response = await fetch("http://localhost:1337/api/categories", {
        method: "GET",
        headers: HEADERS,
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("getCategories", response);
      return response?.data;
    } catch (error) {
      console.error("getCategories", error);
      throw error;
    }
  },
};
