import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default loginGoogle;
