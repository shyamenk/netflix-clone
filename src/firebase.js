import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCzk1IzDFinmB_I9Gd8JaHOFdXtiqFlhFk',
  authDomain: 'netflix-clone-d130f.firebaseapp.com',
  projectId: 'netflix-clone-d130f',
  storageBucket: 'netflix-clone-d130f.appspot.com',
  messagingSenderId: '316177381756',
  appId: '1:316177381756:web:2351b5279a11eed0be8cf9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
