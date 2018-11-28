import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBWeNyRUb7W8R034ghdWU7qCoFpTH9q-nM",
    authDomain: "warfer-4a89c.firebaseapp.com",
    databaseURL: "https://warfer-4a89c.firebaseio.com",
    projectId: "warfer-4a89c",
    storageBucket: "warfer-4a89c.appspot.com",
    messagingSenderId: "525945340482"
};

firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true })

export const db = fire;