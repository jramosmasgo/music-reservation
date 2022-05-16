import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginFirebase = async ({ email, password }) => {
  try {
    const userAuth = await signInWithEmailAndPassword(auth, email, password);
    return userAuth.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default loginFirebase;
