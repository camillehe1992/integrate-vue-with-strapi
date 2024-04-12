/***
 * Common helper functions and constants for API
 */
export const API_HOST = process.env.VUE_APP_BACKEND_API_HOST;
export const API_URL = process.env.VUE_APP_BACKEND_API_URL;
export const HEADERS = {"Content-Type": "application/json"};

export const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) return resp;
  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

export const parseJSON = (resp) => (resp.json ? resp.json() : resp);
