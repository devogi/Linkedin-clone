// Import the functions you need from the SDKs you need

import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsj-H5asON7TkiwDsf618cWG3s6dRECL4",
  authDomain: "my-linkedin-clone-projec-2f19e.firebaseapp.com",
  projectId: "my-linkedin-clone-projec-2f19e",
  storageBucket: "my-linkedin-clone-projec-2f19e.appspot.com",
  messagingSenderId: "608028529731",
  appId: "1:608028529731:web:e588162ec258a3aeb230f6",
  measurementId: "G-L8X4KVRQ8D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


