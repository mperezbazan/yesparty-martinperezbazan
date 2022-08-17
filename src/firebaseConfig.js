import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoMsH9XZD0DtmVepXuCykIzW0QISAsZJ0",
  authDomain: "coderhouse-reactproject.firebaseapp.com",
  projectId: "coderhouse-reactproject",
  storageBucket: "coderhouse-reactproject.appspot.com",
  messagingSenderId: "629341366509",
  appId: "1:629341366509:web:1726369605d2e28c0f44e4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db