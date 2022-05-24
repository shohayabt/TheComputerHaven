import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAb0nCXXRbcVhkICTnFHJAN4nrfxn3nRYc",
  authDomain: "thecomputerhaven-d1d1e.firebaseapp.com",
  projectId: "thecomputerhaven-d1d1e",
  storageBucket: "thecomputerhaven-d1d1e.appspot.com",
  messagingSenderId: "761804507450",
  appId: "1:761804507450:web:b6313a7a56d8e16799e803",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
