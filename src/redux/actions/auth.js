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
import loginFacebook from "../../firebase/auth/loginFacebook";

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

export const registerSocialNetwork = (type) => {
  return async (dispatch) => {
    const resultLogin =
      type === "google" ? await loginGoogle() : await loginFacebook();
    const result = await registerSocialNetworkService({
      uid: resultLogin.uid,
      fullname: resultLogin.displayName,
      email: resultLogin.email,
      emailVerified: resultLogin.emailVerified,
      phone: resultLogin.phoneNumber,
      profileImage: resultLogin.photoURL,
    });
    localStorage.setItem("token", JSON.stringify(result.data));
    if (result.ok) {
      await getInfoUser(resultLogin, dispatch, true);
    }
  };
};

export const loginWithFirebase = (emailSend, password) => {
  return async (dispatch) => {
    const data = await loginFirebase({ email: emailSend, password });
    const result = await loginService(data.email);
    localStorage.setItem("token", JSON.stringify(result.data));
    await getInfoUser(data, dispatch, true);
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
    await getInfoUser(user, dispatch, true);
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
    await getInfoUser(data, dispatch, false);
  };
};

const getInfoUser = async (data, dispatch, islogin = false) => {
  const resultInfo = await getUserService(data.email);

  if (resultInfo.ok) {
    const { loginSocialNetwork, companyCreator, id } = resultInfo.data;
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
    if (islogin) {
      dispatch(openAlert(true, "Realizado: Inicio de sesion correcto"));
      myHistory.replace("/music-rooms");
    }
  }
};
