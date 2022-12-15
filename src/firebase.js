import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/database"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyC5krv1zlJymLSkhhT_DzMkp8MfWrBJIiA",
    authDomain: "bakkaesport-brannstasjon.firebaseapp.com",
    databaseURL: "https://bakkaesport-brannstasjon-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bakkaesport-brannstasjon",
    storageBucket: "bakkaesport-brannstasjon.appspot.com",
    messagingSenderId: "701388858990",
    appId: "1:701388858990:web:2449601f76531651a6a87f",
    measurementId: "G-SBVJNEKBZF"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
