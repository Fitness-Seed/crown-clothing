import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBOO-hnYdQ3mI8Gf_KEh3cthgguANFusYw",
    authDomain: "crown-db-36791.firebaseapp.com",
    databaseURL: "https://crown-db-36791.firebaseio.com",
    projectId: "crown-db-36791",
    storageBucket: "crown-db-36791.appspot.com",
    messagingSenderId: "236653925364",
    appId: "1:236653925364:web:27ae9156e9c5fb6fc45fa1",
    measurementId: "G-QT2LP10FWW"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt :'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;