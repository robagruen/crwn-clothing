// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEXZQOknotVPnQoHd1mFoV8Gn9vvla7_o",
  authDomain: "crwn-clothing-db--2022.firebaseapp.com",
  projectId: "crwn-clothing-db--2022",
  storageBucket: "crwn-clothing-db--2022.appspot.com",
  messagingSenderId: "280113247203",
  appId: "1:280113247203:web:98dc0008ec6be91cae26d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.error('Error creating user', error.message);
    }
  }
}