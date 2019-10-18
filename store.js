import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}

export default fireapp;

const initial = {
}

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


