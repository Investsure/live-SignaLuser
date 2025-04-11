import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAonc-hS1V2MzSSeIWdRKT0gwJi_G58Znc",
  authDomain: "fir-dashboard-e53de.firebaseapp.com",
  projectId: "fir-dashboard-e53de",
  storageBucket: "fir-dashboard-e53de.firebasestorage.app",
  messagingSenderId: "716659883720",
  appId: "1:716659883720:web:9ceaf854066becfcadaffd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
