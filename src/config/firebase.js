import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBoYfmFTCmKzagOsF52FN6ZFWroDTH24YE",
  authDomain: "vue-school-forum-f7658.firebaseapp.com",
  projectId: "vue-school-forum-f7658",
  storageBucket: "vue-school-forum-f7658.appspot.com",
  messagingSenderId: "559706452594",
  appId: "1:559706452594:web:5b9a5f34def3ce07d488eb",
  databaseURL: "https://vue-school-forum-f7658-default-rtdb.firebaseio.com",
};

const app = initializeApp(config);
const db = getFirestore(app);
export default db;
