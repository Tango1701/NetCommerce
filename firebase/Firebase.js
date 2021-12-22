// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALGNFHvKQ47DA1a3O7KueuG7TF6c9XUlQ",
  authDomain: "netcommerce-ef620.firebaseapp.com",
  databaseURL: "https://netcommerce-ef620-default-rtdb.firebaseio.com",
  projectId: "netcommerce-ef620",
  storageBucket: "netcommerce-ef620.appspot.com",
  messagingSenderId: "745117261042",
  appId: "1:745117261042:web:430b3d0f945fc3c7a1446b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app