import * as firebase from 'firebase/app';
import 'firebase/storage'; // image storage
import 'firebase/firestore'; // database

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDigiHLZgOdzgjyAQTp2fNzrUKUWF7poBg",
    authDomain: "mmgallery-70fe7.firebaseapp.com",
    databaseURL: "https://mmgallery-70fe7.firebaseio.com",
    projectId: "mmgallery-70fe7",
    storageBucket: "mmgallery-70fe7.appspot.com",
    messagingSenderId: "855147559457",
    appId: "1:855147559457:web:98b5ff6df0d2e6e19d0160"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };