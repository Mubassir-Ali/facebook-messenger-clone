import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDO6vmuBty6FJv6lr85T3gIZe3s-iZ0poY",
    authDomain: "facebook-messenger-clone-fdb3d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-fdb3d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "facebook-messenger-clone-fdb3d",
    storageBucket: "facebook-messenger-clone-fdb3d.appspot.com",
    messagingSenderId: "447682383932",
    appId: "1:447682383932:web:b5f61b766a222aceed3339"

})

const db =firebaseApp.firestore()
export default db