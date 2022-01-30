import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCtnEgK9X66wcvSnkx5IhUYeX9X2txPEWY",
    authDomain: "braindeveloper-5ce7d.firebaseapp.com",
    projectId: "braindeveloper-5ce7d",
    storageBucket: "braindeveloper-5ce7d.appspot.com",
    messagingSenderId: "436920504659",
    appId: "1:436920504659:web:8eae21ddb30ca3d74991a6"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;