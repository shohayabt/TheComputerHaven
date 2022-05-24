import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAb0nCXXRbcVhkICTnFHJAN4nrfxn3nRYc",
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
