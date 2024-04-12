import {HEADERS, API_URL, checkStatus, parseJSON} from "./common.js";

export default {
  async getRestaurants() {
    try {
      const response = await fetch(API_URL + "/restaurants?populate=*", {
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
      const response = await fetch(API_URL + " /restaurants?populate=*", {
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
      const response = await fetch(API_URL + "/categories", {
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
