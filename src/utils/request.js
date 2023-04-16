// axios library
import axios from "axios";
// envs for global variables
import envs from "../envs";

/** create axios */
export const request = axios.create({
  baseURL: envs.baseUrl,
  timeout: 1000,
});

// // request interceptor to add the authentication token to all requests
// request.interceptors.request.use(
//   (config) => config,
//   (error) => Promise.reject(error)
// );

export default request;
