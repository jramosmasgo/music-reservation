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

export const login = (uid, displayName, email, profileImage, token) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      email,
      profileImage,
      token,
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
    localStorage.setItem("token", JSON.stringify(result.data));
    dispatch(
      openAlert(true, "Rellizado: El incio de Sesion correcto", "success")
    );
    dispatch(
      login(
        resultLogin.uid,
        resultLogin.displayName,
        resultLogin.email,
        resultLogin.photoURL,
        result.data
      )
    );
  };
};

export const loginWithFirebase = (emailSend, password) => {
  return async (dispatch) => {
    const data = await loginFirebase({ email: emailSend, password });
    const result = await loginService(data.email);
    localStorage.setItem("token", JSON.stringify(result.data));
    dispatch(
      login(data.uid, data.displayName, data.email, data.photoURL, result.data)
    );
  };
};

export const registerWithFirebase = ({ email, password, name }) => {
  return async (dispatch) => {
    const { user } = await registerFirebase({ email, password, name });
    console.log(user);
    const result = await registerService({
      uid: user.uid,
      fullname: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      image: null,
    });
    localStorage.setItem("token", JSON.stringify(result.data));
    dispatch(
      login(user.uid, user.displayName, user.email, user.photoURL, result.data)
    );
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
  };
};
