import { auth } from "../firebaseConfig";

const logout = async () => {
  await auth.signOut();
  if (localStorage.getItem("userAuth")) {
    localStorage.removeItem("userAuth");
  }
};

export default logout;
