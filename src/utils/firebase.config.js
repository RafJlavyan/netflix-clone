import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9l6ql6extKjSdWHx4vNd1y2_8ioFBxwo",
  authDomain: "learning-projects-84791.firebaseapp.com",
  projectId: "learning-projects-84791",
  storageBucket: "learning-projects-84791.appspot.com",
  messagingSenderId: "400317284636",
  appId: "1:400317284636:web:0081ee0bcf93c74ab3bad9",
  measurementId: "G-DJH06M7Q5C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
