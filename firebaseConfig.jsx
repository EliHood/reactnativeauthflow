import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import "@firebase/firestore";

const myFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFeGVbw5NkPGG408IidZd_FIS1RX9NbvI",
  authDomain: "eli12-258801.firebaseapp.com",
  databaseURL: "https://eli12-258801.firebaseio.com",
  projectId: "eli12-258801",
  storageBucket: "eli12-258801.appspot.com",
  messagingSenderId: "563352381871",
  appId: "1:563352381871:web:619632e4f78720cd05e75a",
});

export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);
export const fireAuth = myFirebaseApp.auth();
