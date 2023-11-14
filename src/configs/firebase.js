import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3aup2KWhVDJ8XRsjvr2_QyvM9tD_hxqE",
  authDomain: "virtuallearn-2tdss-2023.firebaseapp.com",
  projectId: "virtuallearn-2tdss-2023",
  storageBucket: "virtuallearn-2tdss-2023.appspot.com",
  messagingSenderId: "174326885200",
  appId: "1:174326885200:web:b85450428540baefd41a55",
  measurementId: "G-E9B9CXKE61"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();

