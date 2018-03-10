import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert , TextInput, Button } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';

class Facebook extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    _loginWithFB() {
        let that = this;
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    let thatIs = that;
                    AccessToken.getCurrentAccessToken()
                        .then((accessTokenData) => {
                            console.log(accessTokenData, 'accessTokenData')
                            const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
                           console.log(credential)
                            // thatIs.props.authWithFBorGoogle(credential);

                        }, (error) => {
                            console.log(error, 'some error occurred');
                        })
                }
            },
            function (error) {
                alert('Login fail with error: ' + error);
            }
        );
    }
    render() {
        return (
            <View style={styles.view}>

                <Text style={styles.header}> Facebook </Text>
                <Button
                    onPress={this._loginWithFB.bind(this)} 
                    title="Facebook Sign Up "
                    color="#841584"
                    accessibilityLabel="Sign Up"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    view: {
        // backgroundColor : 'green' ,
    }
})
export default Facebook