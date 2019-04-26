import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBe9Z8LIpswa21s0_T7SeM4gsPHAKi5C6k',
  authDomain: 'notbanana-7f869.firebaseapp.com',
  databaseURL: 'https://notbanana-7f869.firebaseio.com',
  projectId: 'notbanana-7f869',
  storageBucket: 'notbanana-7f869.appspot.com',
  messagingSenderId: '697769708696'
})

// Firestore
export const db = app.firestore()
export const tsmp = firebase.firestore.FieldValue.serverTimestamp()
