
import firebase from 'firebase';

const db = firebase.initializeApp({
    apiKey: "AIzaSyBxASPhFIc9-dCWvwwF5_ar6uB3V2d49LQ",
    databaseURL: "https://react-test-ae5a0.firebaseio.com",
    projectId: "react-test-ae5a0",
    storageBucket: "react-test-ae5a0.appspot.com",
    messagingSenderId: "244041063526",
});

export default db;