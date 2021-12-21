import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyBI57Y48UrM6wd96z9J_9tKpIVbvdZI2RA",
  authDomain: "crwn-rk.firebaseapp.com",
  projectId: "crwn-rk",
  storageBucket: "crwn-rk.appspot.com",
  messagingSenderId: "860532006051",
  appId: "1:860532006051:web:4881c959d05adbfa2b7316",
  measurementId: "G-FY99FLTY41"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore(); 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);
export default firebase;