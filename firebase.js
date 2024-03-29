import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyBxCtud9r1MKnUAdyfFDayTIHkfLjSc4Ik",
    authDomain: "myservices-4ae40.firebaseapp.com",
    projectId: "myservices-4ae40",
    storageBucket: "myservices-4ae40.appspot.com",
    messagingSenderId: "1033397521135",
    appId: "1:1033397521135:web:9bf3fc75c0727bf6cca91a"
  };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export const db = getFirestore(app); 

 export default auth;
 