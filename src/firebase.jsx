import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyD6kgN-2hSlIWLYS8hKnyfCyXql-7GK8qE',
  authDomain: 'movie-reactjs-9dab4.firebaseapp.com',
  projectId: 'movie-reactjs-9dab4',
  storageBucket: 'movie-reactjs-9dab4.appspot.com',
  messagingSenderId: '135520475062',
  appId: '1:135520475062:web:afee08d27ab5c4154e5317',
  measurementId: 'G-QSZ18L2QWB',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;