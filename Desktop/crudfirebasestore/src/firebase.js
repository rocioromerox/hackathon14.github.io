import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAly8tA89J-IgEJnlRUG3eBJyUT7OSLMk8",
    authDomain: "crudefirebaselast.firebaseapp.com",
    databaseURL: "https://crudefirebaselast.firebaseio.com",
    projectId: "crudefirebaselast",
    storageBucket: "crudefirebaselast.appspot.com",
    messagingSenderId: "244246379515",
    appId: "1:244246379515:web:f99f65528b2ca6281fa95e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //llamar consta

  const db = firebase.firestore();
  export { db }; //exportar para todo el proyecto


  /*
  import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAly8tA89J-IgEJnlRUG3eBJyUT7OSLMk8",
    authDomain: "crudefirebaselast.firebaseapp.com",
    databaseURL: "https://crudefirebaselast.firebaseio.com",
    projectId: "crudefirebaselast",
    storageBucket: "crudefirebaselast.appspot.com",
    messagingSenderId: "244246379515",
    appId: "1:244246379515:web:f99f65528b2ca6281fa95e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //llamar consta

  const db = firebase.firestore();
  export { db }; //exportar para todo el proyecto
  */