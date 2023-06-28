import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD07Ovj86k4Yh56ZXWnPMh6HQdDgCWF7Pg",
  authDomain: "upc-inc-project.firebaseapp.com",
  projectId: "upc-inc-project",
  storageBucket: "upc-inc-project.appspot.com",
  messagingSenderId: "338567874975",
  appId: "1:338567874975:web:ef676f28660db2483055aa",
  measurementId: "G-87GNF89R20",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
