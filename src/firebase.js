import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb0ur21PH-WmRgzlyZebVAPZHUHX_FS0k",
  authDomain: "slack-clone-3d63d.firebaseapp.com",
  projectId: "slack-clone-3d63d",
  storageBucket: "slack-clone-3d63d.appspot.com",
  messagingSenderId: "580572122446",
  appId: "1:580572122446:web:0768c3a193659697d1221f",
  measurementId: "G-RN2HMBPWZF"
};

// Connect front end to back end (firebase)
const firebaseApp = firebase.initializeApp( firebaseConfig );

// Get access to database
const db = firebaseApp.firestore();

// Prepare authentication module
const auth = firebase.auth();

// Prepare provider. Get Google services.
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;