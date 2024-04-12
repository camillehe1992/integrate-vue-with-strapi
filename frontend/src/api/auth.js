import {HEADERS, API_HOST, checkStatus, parseJSON} from "./common.js";

export default {
  async authenticate(body) {
    try {
      const response = await fetch(API_HOST + "/auth/local", {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(body),
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("authenticate", response);
      return response?.data;
    } catch (error) {
      console.error("authenticate", error);
      throw error;
    }
  },

  async register(body) {
    try {
      const response = await fetch(API_HOST + "/auth/local/register", {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(body),
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log("register", response);
      return response?.data;
    } catch (error) {
      console.error("register", error);
      throw error;
    }
  },
};
