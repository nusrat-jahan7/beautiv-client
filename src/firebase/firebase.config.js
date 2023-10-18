import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCdMKDDb1Rzf5d5_iNnR9itv2INQjmgd0",
  authDomain: "brand-shop-a41a1.firebaseapp.com",
  projectId: "brand-shop-a41a1",
  storageBucket: "brand-shop-a41a1.appspot.com",
  messagingSenderId: "562173310633",
  appId: "1:562173310633:web:b623422fd8a98a6b129bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;