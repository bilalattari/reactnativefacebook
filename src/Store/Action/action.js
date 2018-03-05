import ActionTypes from '../Constant/constant';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA0sbRL5U8uBhNk_5iXZzAzYdIsXFzyfbI",
    authDomain: "reactnativesignup.firebaseapp.com",
    databaseURL: "https://reactnativesignup.firebaseio.com",
    projectId: "reactnativesignup",
    storageBucket: "reactnativesignup.appspot.com",
    messagingSenderId: "856753555929"
  };
  firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}
export function userInfo(userInformation) {
    return dispatch => {
        dispatch({ type: ActionTypes.USERINFO, payload: userInformation })
    }
}