import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX4jT-67GWc46D1Q6RZqXmW6Cyzd2vgl0",
  authDomain: "artstation-c28e8.firebaseapp.com",
  projectId: "artstation-c28e8",
  storageBucket: "artstation-c28e8.appspot.com",
  messagingSenderId: "552661991680",
  appId: "1:552661991680:web:13d9ecc1f0b81b2a86b3e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
