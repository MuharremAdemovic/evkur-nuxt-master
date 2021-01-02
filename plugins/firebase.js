import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyD9-sLzP_DLqS1Qn7ps1lzPsDF6eOg6rUg',
    authDomain: 'myfirebase-c5995.firebaseapp.com',
    databaseURL: 'https://myfirebase-c5995-default-rtdb.firebaseio.com',
    projectId: 'myfirebase-c5995',
    storageBucket: 'myfirebase-c5995.appspot.com',
    messagingSenderId: '385340127295',
    appId: '1:385340127295:web:bb949a1bfd5e5ad720e08a',
    measurementId: 'G-6RN12DKJKM'
};

let app = null
if (!firebase.app.length) {
    app = firebase.initializeApp(firebaseConfig)
}



export default firebase