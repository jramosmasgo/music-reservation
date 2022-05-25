import loginFirebase from "../../firebase/auth/loginFirebase";
import types from "../types/types";
import logout from "../../firebase/auth/logOut";
import registerFirebase from "../../firebase/auth/registerFirebase";
import {
  loginService,
  registerService,
  registerSocialNetworkService,
} from "../../api/auth/authService";
import loginGoogle from "../../firebase/auth/loginGoogle";
import { openAlert } from "./alert";
import { myHistory } from "../../routers/history";
import { getUserService } from "../../api/user/userService";

export const login = (
  uid,
  displayName,
  email,
  profileImage,
  loginSocialNetwork,
  companyCreator,
  id
) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      email,
      profileImage,
      loginSocialNetwork,
      companyCreator,
      id,
    },
  };
};

export const registerSocialNetwork = () => {
  return async (dispatch) => {
    const resultLogin = await loginGoogle();
    const result = await registerSocialNetworkService({
      uid: resultLogin.uid,
      fullname: resultLogin.displayName,
      email: resultLogin.email,
      emailVerified: resultLogin.emailVerified,
      phone: resultLogin.phoneNumber,
      profileImage: resultLogin.photoURL,
    });

    console.log(result.data);

    localStorage.setItem("token", JSON.stringify(result.data));

    if (result.ok) {
      await getInfoUser(resultLogin, dispatch);
    }
  };
};

export const loginWithFirebase = (emailSend, password) => {
  return async (dispatch) => {
    const data = await loginFirebase({ email: emailSend, password });
    const result = await loginService(data.email);
    localStorage.setItem("token", JSON.stringify(result.data));
    await getInfoUser(data, dispatch);
  };
};

export const registerWithFirebase = ({ email, password, name }) => {
  return async (dispatch) => {
    const { user } = await registerFirebase({ email, password, name });
    const result = await registerService({
      uid: user.uid,
      fullname: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      image: null,
    });
    localStorage.setItem("token", JSON.stringify(result.data));
    await getInfoUser(user, dispatch);
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await logout();
    localStorage.removeItem("token");
    dispatch({
      type: types.logout,
      payload: {},
    });
    myHistory.replace("/music-rooms");
  };
};

export const loginSetInfo = (data) => {
  return async (dispatch) => {
    await getInfoUser(data, dispatch);
  };
};

const getInfoUser = async (data, dispatch) => {
  const resultInfo = await getUserService(data.email);
  const { loginSocialNetwork, companyCreator, id } = resultInfo.data;
  dispatch(openAlert(true, "Realizado: Inicio de sesion correcto"));
  dispatch(
    login(
      data.uid,
      data.displayName,
      data.email,
      data.photoURL,
      loginSocialNetwork,
      companyCreator,
      id
    )
  );
  myHistory.replace("/music-rooms");
};
