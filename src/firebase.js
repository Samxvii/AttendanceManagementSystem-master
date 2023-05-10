import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
//import {getFirestore} from 'firebase/firestore'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPaVV1fhbW_4Om-xDZmMjrKYWRrmetYz0",
  authDomain: "pegasus-attendance-system.firebaseapp.com",
  databaseURL: "https://pegasus-attendance-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pegasus-attendance-system",
  storageBucket: "pegasus-attendance-system.appspot.com",
  messagingSenderId: "29108033732",
  appId: "1:29108033732:web:2e4bd46b3229acacc79191",
  measurementId: "G-L2WXB6B5T8"
};

function startFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyCPaVV1fhbW_4Om-xDZmMjrKYWRrmetYz0",
    authDomain: "pegasus-attendance-system.firebaseapp.com",
    databaseURL: "https://pegasus-attendance-system-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pegasus-attendance-system",
    storageBucket: "pegasus-attendance-system.appspot.com",
    messagingSenderId: "29108033732",
    appId: "1:29108033732:web:2e4bd46b3229acacc79191",
    measurementId: "G-L2WXB6B5T8"
  };
  const app=initializeApp(firebaseConfig);
  return(getDatabase(app));  
}
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
// Initialize Firestore 
//const db= getFirestore(app); 
  export{app,auth,startFirebase};
  