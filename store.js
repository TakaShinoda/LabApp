import firebase from "firebase";

// Firebaseの初期化
const firebaseConfig = {
    apiKey: "AIzaSyCEJofsTR_yavt5svTPuMbzhlQgH8EjpyQ",
    authDomain: "labapp-2cb54.firebaseapp.com",
    databaseURL: "https://labapp-2cb54.firebaseio.com",
    projectId: "labapp-2cb54",
    storageBucket: "labapp-2cb54.appspot.com",
    messagingSenderId: "943558314925",
    appId: "1:943558314925:web:3885713334b75bcd8c2f24",
    measurementId: "G-ZB9XJT09RX"
};
var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;



