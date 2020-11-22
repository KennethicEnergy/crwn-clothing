import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyByHDNgZedHxREaGMZ0k4FUqevSDj4H1Y8",
  authDomain: "crwn-db-60a0e.firebaseapp.com",
  databaseURL: "https://crwn-db-60a0e.firebaseio.com",
  projectId: "crwn-db-60a0e",
  storageBucket: "crwn-db-60a0e.appspot.com",
  messagingSenderId: "961544402042",
  appId: "1:961544402042:web:5db290941a4412df0d77c3",
  measurementId: "G-7VBDBS0RT7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
