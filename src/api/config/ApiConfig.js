import axioos from "axios";

const serviceAPI = axioos.create({
  baseURL: "http://localhost:4000",
});

serviceAPI.interceptors.request.use(
  async (config) => {
    const access_token = JSON.parse(localStorage.getItem("token"));
    config.headers = {
      Authorization: `Bearer ${access_token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default serviceAPI;
