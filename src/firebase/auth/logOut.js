import { auth } from "../firebaseConfig";

const logout = async () => {
  await auth.signOut();
  localStorage.removeItem("userAuth");
};

export default logout;
