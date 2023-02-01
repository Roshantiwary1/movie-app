import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfvm1RjcEw_o8PcbEk7iQeonNB4Cbrfyk",
  authDomain: "realtor-clone-8f69b.firebaseapp.com",
  projectId: "realtor-clone-8f69b",
  storageBucket: "realtor-clone-8f69b.appspot.com",
  messagingSenderId: "791534489791",
  appId: "1:791534489791:web:2869ec889ea5eade04f60a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()