import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
 

const crwnrk ={
  apiKey: "AIzaSyAaeS5eDgDTxAYrfx3WnvD_l6qCMWmee5I",
  authDomain: "crwnrk.firebaseapp.com",
  projectId: "crwnrk",
  storageBucket: "crwnrk.appspot.com",
  messagingSenderId: "914917970032",
  appId: "1:914917970032:web:4d7ba6827235fcd418e4b5",
  measurementId: "G-84KVNFRG04"
};
firebase.initializeApp(crwnrk);

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot =await userRef.get();
   
  if(!snapShot.exists){
    const { displayName, email}=userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

    } );
  } catch (error) {
       console.log('error creating user', error.message);
      }
    }
    return userRef;
  
}
export const auth = firebase.auth();
export const firestore = firebase.firestore(); 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);
export default firebase;