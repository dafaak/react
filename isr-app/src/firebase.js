import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsWhTjNkyFnRM7CmIi2uEr2zUwj1BcoSQ",
    authDomain: "react-firebase-test-e82a2.firebaseapp.com",
    projectId: "react-firebase-test-e82a2",
    storageBucket: "react-firebase-test-e82a2.appspot.com",
    messagingSenderId: "89856139746",
    appId: "1:89856139746:web:b978c70d1822f6287a99bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};