import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4DgOHgXENivtyF1JVq8AmRnlLu5TQrvk",
  authDomain: "expense-page.firebaseapp.com",
  databaseURL: "https://expense-page.firebaseio.com",
  projectId: "expense-page",
  storageBucket: "expense-page.appspot.com",
  messagingSenderId: "702445276775",
  appId: "1:702445276775:web:29f7896c637f851dd4cec2",
  measurementId: "G-TKXL66L0HL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
