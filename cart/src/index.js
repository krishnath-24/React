import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyC2baPxaUFcjbiQqTDUxKgICaAc2GB2Gb8",
  authDomain: "cart-ef239.firebaseapp.com",
  databaseURL: "https://cart-ef239.firebaseio.com",
  projectId: "cart-ef239",
  storageBucket: "cart-ef239.appspot.com",
  messagingSenderId: "378176474479",
  appId: "1:378176474479:web:fa820938cb04ecea4d2c9a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);



