import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";

const registerFirebase = async ({ email, password, name }) => {
  try {
    const userRegister = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userRegister.user, { displayName: name });
    localStorage.setItem(
      "userAuth",
      JSON.stringify(auth.currentUser.providerData)
    );
    return userRegister;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default registerFirebase;
