import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTd_6cdqRCe7nl65KlBe3AMFtGN46ivkc",
  authDomain: "music-reservation.firebaseapp.com",
  projectId: "music-reservation",
  storageBucket: "music-reservation.appspot.com",
  messagingSenderId: "1074621720941",
  appId: "1:1074621720941:web:60857dd00816b631dfd264",
  measurementId: "G-LD4XB994LM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
