import { auth } from "../firebaseConfig";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new FacebookAuthProvider();

const loginFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default loginFacebook;
