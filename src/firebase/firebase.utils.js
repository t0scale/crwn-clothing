import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB78rmc5vk6bv8Xmdlvt918FpWu2dTRdYg",
  authDomain: "crwn-clothing-990b2.firebaseapp.com",
  databaseURL: "https://crwn-clothing-990b2.firebaseio.com",
  projectId: "crwn-clothing-990b2",
  storageBucket: "crwn-clothing-990b2.appspot.com",
  messagingSenderId: "391166326604",
  appId: "1:391166326604:web:f83e74cd4a59989bae81e9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;