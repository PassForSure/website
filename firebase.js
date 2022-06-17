import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID
};

//initialising app and db
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app,db};