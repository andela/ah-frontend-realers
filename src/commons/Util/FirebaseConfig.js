import * as firebase from 'firebase';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCipGFyDXw7jxGTlFJxZ4szmTF9BxsCPYU',
  authDomain: 'ah-frontend-realers.firebaseapp.com',
  databaseURL: 'https://ah-frontend-realers.firebaseio.com',
  projectId: 'ah-frontend-realers',
  storageBucket: 'ah-frontend-realers.appspot.com',
  messagingSenderId: '861644439508',
  appId: '1:861644439508:web:5b8553fd4ac9a79b',
};

firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default,
};
