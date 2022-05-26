import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { store } from "../../redux/store/store";
import { openAlert } from "../../redux/actions/alert";

const loginFirebase = async ({ email, password }) => {
  try {
    const userAuth = await signInWithEmailAndPassword(auth, email, password);
    return userAuth.user;
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      store.dispatch(
        openAlert(true, "Login Fallido: Verifique sus credenciales", "error")
      );
    }
    throw new Error(error.message);
  }
};

export default loginFirebase;
