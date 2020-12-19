import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

/* Initialize Firebase */
const firebaseConfig = {
  apiKey: "AIzaSyCybNeAk4Gpo0J03hNo0idhwUf1haWjq84",
  authDomain: "jeremy-game.firebaseapp.com",
  projectId: "jeremy-game",
  storageBucket: "jeremy-game.appspot.com",
  messagingSenderId: "268319403255",
  appId: "1:268319403255:web:17109d0e68cfdf3bf837f2"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
