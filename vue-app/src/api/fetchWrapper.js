import { API_ROOT_HOST } from "babel-dotenv";

const API_PATH = API_ROOT_HOST + "/api";
const headers = { "Content-Type": "application/json" };

const fetchWrapper = {
  get: async (route) => {
    try {
      const response = await fetch(`${API_PATH}/${route}`, {
        method: "GET",
        headers,
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(extractAttributes);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  post: async (route, payload) => {
    try {
      const response = await fetch(`${API_PATH}/${route}`, {
        method: "POST",
        headers,
        body: JSON.stringify({ data: payload }),
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(extractAttributes);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  put: async (route, payload) => {
    try {
      const response = await fetch(`${API_PATH}/${route}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ data: payload }),
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(extractAttributes);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (route, payload) => {
    try {
      const response = await fetch(`${API_PATH}/${route}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ data: payload }),
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(extractAttributes);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const parseJSON = (resp) => {
  return resp.json ? resp.json() : resp;
};

const extractAttributes = (resp) => {
  return resp?.data.map((item) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
};
export default fetchWrapper;
