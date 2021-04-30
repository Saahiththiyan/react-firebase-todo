import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx7h0hEdAyWfUNsn-hs493yZJUSVGyJ6A",
  authDomain: "react-todo-ecacf.firebaseapp.com",
  projectId: "react-todo-ecacf",
  storageBucket: "react-todo-ecacf.appspot.com",
  messagingSenderId: "565339336258",
  appId: "1:565339336258:web:5d83c8552e81d3bf7dc7db",
  measurementId: "G-57BD1W4PQT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
