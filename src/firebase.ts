import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';

var firebaseConfig = {
    apiKey: "AIzaSyAhnsgWw6aRdbGAz5B3hORYhQD-067bjyo",
    authDomain: "distoribution.firebaseapp.com",
    databaseURL: "https://distoribution.firebaseio.com",
    projectId: "distoribution",
    storageBucket: "distoribution.appspot.com",
    messagingSenderId: "983160578802",
    appId: "1:983160578802:web:e0b3d9751799786574266b",
    measurementId: "G-YR46J8ZV08"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
