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
export function userInfo(user) {
    return dispatch => {
        // console.log('user', user);
        firebase.auth().createUserWithEmailAndPassword(user.emailAddress, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let allUsersArr = [];
                                for (var key in allUsers) {
                                    allUsersArr.push(allUsers[key]);
                                }
                                let currentUserInf = {
                                    id: firebase.auth().currentUser.uid,
                                    name: user.username
                                }
                                console.log(currentUserInf)
                                dispatch({ type: ActionTypes.USERINFO, payload: allUsersArr })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserInf })
                            })

                    })
            })
    }
}


export function signinAction(users) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
            .then((signedinUser) => {
                console.log('you are sign in')
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        console.log('user in signin', users);
                        console.log(signedinUser)
                        let allUsers = signedinUser.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.USERINFO, payload: currentUserUid })
                    })
            })


    }
}
export function authWithFBorGoogle(credential) {
    return dispatch => {
        console.log(credential, 'credential');
        firebase.auth().signInWithCredential(credential).then(function (user) {
            console.log("Sign In Success", user);
        })
    }
}

                // firebase.database().ref('/').child(`user/${user.uid}/`).once('value', (snap) => {
                //     if (snap.val() === null) {
                //         let userObj = {
                //             email: user.email,
                //             roll: 'learner',
                //             uid: user.uid,
                //             userName: user.displayName
                //         }
                //         firebase.database().ref(`/user/${user.uid}/`).set(userObj)
                //             .then(() => {
                //                 dispatch(registerSuccessfully())
                //                 console.log("heelo0000000000")
                //                 dispatch(loginSuccessfully(userObj))

