import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
 

const config ={
  apiKey: "AIzaSyCJpwlCl7jRyOxaXx5VuZckSuoSGcasUZg",
  authDomain: "crwn-rk-1.firebaseapp.com",
  projectId: "crwn-rk-1",
  storageBucket: "crwn-rk-1.appspot.com",
  messagingSenderId: "599555124437",
  appId: "1:599555124437:web:deaa5d456595b161ba065c",
  measurementId: "G-YNC67PTCKG"
};
firebase.initializeApp(config);

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