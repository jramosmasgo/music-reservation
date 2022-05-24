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
    return userRegister;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateFirebase = async (data) => {
  try {
    const user = auth.currentUser;
    await updateProfile(user, { ...data });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default registerFirebase;
