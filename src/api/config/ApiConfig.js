import axioos from "axios";
import { logOut } from "../../redux/actions/auth";
import { store } from "../../redux/store/store";
import { myHistory } from "../../routers/history";

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
    console.log("este es un error");
    Promise.reject(error);
  }
);

serviceAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const errorResponse = error.response;
    if (errorResponse.status === 401) {
      store.dispatch(logOut());
      myHistory.replace(`/login`);
    }

    return Promise.reject(error);
  }
);

export default serviceAPI;
