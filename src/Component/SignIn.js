import React, { Component } from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux'
import { signinAction , authWithFBorGoogle } from '../Store/Action/action'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
class SignIn extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
     _loginWithGoogle() {
        let that = this;
        GoogleSignin.configure({
            iosClientId: '781554659331-chde550j1hkdr937bsvfiot4esrtm3om.apps.googleusercontent.com', // only for iOS
        })
            .then(() => {
                let thatIs = that;
                GoogleSignin.signIn()
                    .then((accessTokenData) => {
                        console.log(accessTokenData, 'signin++++++++++++');
                        const credential = firebase.auth.GoogleAuthProvider.credential(accessTokenData);
                        thatIs.props.authWithFBorGoogless(credential);
                    })
                    .catch((err) => {
                        console.log('WRONG SIGNIN----------', err);
                    })
                    // .done();
            });
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
                            thatIs.props.authWithFBorGoogless(credential);
                            thatIs.props.navigation.navigate('Profile')

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
            <View style={{ backgroundColor: '#F8F9FE', height: '100%', }}>
                <ScrollView>

                    <Header style={{ backgroundColor: '#2196F3' }}>
                        <Body>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: '#FFF' }}>SIGN IN </Text>
                            </TouchableOpacity>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={
                                () => {
                                    console.log('go to login page')
                                    this.props.navigation.navigate('signUp')
                                }
                            }>
                                <Text style={{ fontSize: 12, color: 'yellow' }}>CREATE AN ACCOUNT </Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <View style={styles.imageStye}>
                        <Image
                            source={require('../Images/mage_splash_logo.png')}
                        />
                    </View >
                    <View style={{ alignItems: 'center', margin: 18 }}>

                        <View style={styles.progressBar}>
                            <View style={styles.bar} />
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <Text>SIGN IN WITH YOUR MAGE ACCOUNT</Text>
                    </View>
                    <View style={styles.inputDiv}>
                        {/* <Text style={styles.inputText}>Email Address</Text> */}
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ email: text })
                                }}
                                value={this.state.text}
                                placeholder="Email"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#B2B2B2"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            <Image style={{ width: 24, height: 20, marginRight: '4%' }}
                                source={require('../Images/email_blue.png')}
                            />
                        </Item>

                    </View>
                    <View style={styles.inputDiv}>
                        {/* <Text style={styles.inputText}>Confirm Password</Text> */}
                        <Item style={styles.input}>
                            <Input
                                onChangeText={(text) => {
                                    console.log(text)
                                    this.setState({ password: text })
                                }}
                                secureTextEntry={true}
                                value={this.state.text}
                                placeholder="Password"
                                placeholderStyle={{ fontSize: 10 }}
                                placeholderTextColor="#B2B2B2"
                                style={{ marginLeft: "2%", fontSize: 15 }}
                            />
                            {/* <Icon name='school' style={styl.icons} /> */}
                            <Image style={{ width: 17, height: 26, marginRight: '4%' }}
                                source={require('../Images/lock_blueios.png')}
                            />
                        </Item>
                    </View>
                    <View style={styles.inputDiv}>
                        <TouchableOpacity
                            style={styles.signUpBtn}
                            onPress={
                                    () => {
                                        console.log(this.state)
                                         this.props.getUserSignIn(this.state)
                                         {/* this.props.navigation.navigate('Profile')  */}
                                    }
                                }
                        >
                            <Text style={styles.signUpBtnTxt}
                                >SIGN IN </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <Text style={{ color: '#C9CACF', marginVertical: 5, fontWeight: 'bold' }}>OR SIGN IN WITH</Text>
                        <View style={{ flexDirection: 'row', marginTop: 12, paddingVertical: 8 }}>
                            <TouchableOpacity
                            onPress={this._loginWithGoogle.bind(this)}
                                >
                                <Image style={{ width: 48, height: 48, marginRight: 4 }}
                                    source={require('../Images/Google+.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._loginWithFB.bind(this)}
                            >
                                <Image style={{ width: 48, height: 48, marginLeft: 4 }}
                                    source={require('../Images/facebook.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
function mapStateToProp(state) {
    console.log(state, 'state')
    return ({

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        getUserSignIn: (data) => {
            dispatch(signinAction(data))
        },
         authWithFBorGoogless: (credential) => {
            dispatch(authWithFBorGoogle(credential))
        }
    })
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        backgroundColor: '#5b85ef',
        height: 60,
    },
    headerSignIn: {
        color: '#fff',
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        marginRight: 16,
        fontWeight: 'bold'

    },
    headerCreateAcc: {
        color: '#fff',
        fontSize: 14,
        color: 'blue',
        textAlign: 'right',
        marginLeft: 16,
        fontWeight: 'bold'
    },
    bar: {
        width: 112,
        height: 8,
        backgroundColor: "#2a79f9",
        borderRadius: 4
        // marginTop: 20,
    },
    progressBar: {
        width: 112,
        height: 8,
        backgroundColor: "lightgray",
        borderRadius: 4,
        marginTop: 20
    },
    imageStye: {
        alignItems: 'center',
        marginTop: '10%',
    },
    inputText: {
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 5,
    },
    inputDiv: {
        margin: 8,
        padding: 2,
        marginRight: 28,
        marginLeft: 28,
    },
    input: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 30,
        padding: 12,
        elevation: 7,

    },
    signUpBtn: {
        // marginRight: 40,
        // marginLeft: 40,
        // marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#2394F3',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff'
    },
    signUpBtnTxt: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})

// AppRegistry.registerComponent('SignIn', () => SignIn);
export default connect(mapStateToProp, mapDispatchToProp)(SignIn)