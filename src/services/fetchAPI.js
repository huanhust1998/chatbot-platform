import axios from "axios";

export const fetchApiAuth = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

fetchApiAuth.interceptors.request.use(
  async (config) => {
    // const accessToken = TokenService.getLocalAccessToken();
    // if (!accessToken) {
    //   return config;
    // }
    // config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
