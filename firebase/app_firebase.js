// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const app = initializeApp({
  apiKey: "AIzaSyCVC15fm5n5739TwqBu5wrNt9lr_5gfLfo",
  authDomain: "portfolio-jf-viana.firebaseapp.com",
  projectId: "portfolio-jf-viana",
  storageBucket: "portfolio-jf-viana.firebasestorage.app",
  messagingSenderId: "953277070025",
  appId: "1:953277070025:web:21fd66eb915ab7aa3b2b18",
  measurementId: "G-HTCG61NVFE"
});
export const firestore = getFirestore(app, "dadosporfolio");
export const storage = getStorage(app)
export const analytics = getAnalytics(app);