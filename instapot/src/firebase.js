import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZBNKvto-hbBHvLF7H8YzaVPlt2mkoBlM",
  authDomain: "instapot-9249a.firebaseapp.com",
  projectId: "instapot-9249a",
  storageBucket: "instapot-9249a.appspot.com",
  messagingSenderId: "344913601832",
  appId: "1:344913601832:web:57ecf93da4abfcefb99c1d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();