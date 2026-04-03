import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ add this

const firebaseConfig = {
  apiKey: "e7397c98374936bbd1305f9626d3ebab",
  authDomain: "movie-site-23fcc.firebaseapp.com",
  projectId: "movie-site-23fcc",
  storageBucket: "movie-site-23fcc.firebasestorage.app",
  messagingSenderId: "1062147932004",
  appId: "1:1062147932004:web:25900836b9108349154471",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // ✅ works now