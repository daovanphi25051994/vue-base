import axios from "axios";
import { getToken } from "./cookie";

const httpRequest = axios.create({
  baseURL: "https://vndreamers-dev.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

httpRequest.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default httpRequest;
