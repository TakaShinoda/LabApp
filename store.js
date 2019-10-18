import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
const firebaseConfig = {
  apiKey: "AIzaSyBKzOZ9OY-eYsxHBfgE5VNH4yCnMRDOiHc",
  authDomain: "labapp-75272.firebaseapp.com",
  databaseURL: "https://labapp-75272.firebaseio.com",
  projectId: "labapp-75272",
  storageBucket: "labapp-75272.appspot.com",
  messagingSenderId: "459562211744",
  appId: "1:459562211744:web:45726986de4b4bfd3facc5"
};

var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}

export default fireapp;


// ステート初期値
const initial = {
}

// レデューサー
function fireReducer (state = initial, action) {
  switch (action.type) {
      case 'TESTACTION':
        return state;

      default:
          return state;
  }
}
  
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}


