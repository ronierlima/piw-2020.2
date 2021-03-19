import axios from "axios";

const token = localStorage.getItem("@App:token");
const base = "http://localhost:3003/api/";

const api = axios.create({
  baseURL: base,
  headers: {
    Accept: `application/json`,
    Authorization: token,
  },
});

export const defaults = {
  headers: {
    Authorization: token,
  },
};

api.interceptors.request.use(async (config) => {

  if (!token) {
    config.headers.Authorization = localStorage.getItem("@App:token");
  }

  return config;
});

// api.interceptors.response.use((response) => {
//         // Return a successful response back to the calling service
//         return response;
//     }, (error) => {
//     // Return any error which is not due to authentication back to the calling service
//         if (error.response.status === 401) {
//             logout();
//             return window.location.href = (`${process.env.PUBLIC_URL}/login`);
//         }

//         return Promise.reject(error)
// });

export default api;
