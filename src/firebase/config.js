import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDZYTTFqwFMv3PDsU8_ZJ8XDD8d7-YMJts",
  authDomain: "fir-234d6.firebaseapp.com",
  projectId: "fir-234d6",
  storageBucket: "fir-234d6.appspot.com",
  messagingSenderId: "214279915313",
  appId: "1:214279915313:web:31874894ef9bc2260d1210",
  measurementId: "G-0VBNRGC7MZ"
};

export default firebase.initializeApp(firebaseConfig)
