import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-k4DnBG1A73TDxsICOyI-9H9r9Xhfv_M',
  authDomain: 'react-cursos-7593e.firebaseapp.com',
  projectId: 'react-cursos-7593e',
  storageBucket: 'react-cursos-7593e.appspot.com',
  messagingSenderId: '158697635708',
  appId: '1:158697635708:web:39525fc9b37100cd406ef9'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
