import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgtRB87rFZozZriDftMhShgOEcd4_yU8U",
  authDomain: "xepelin-d7728.firebaseapp.com",
  projectId: "xepelin-d7728",
  storageBucket: "xepelin-d7728.appspot.com",
  messagingSenderId: "1020055944418",
  appId: "1:1020055944418:web:9fd30da3b30e60a245f2bb",
  measurementId: "G-QLMVHLRVNG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;