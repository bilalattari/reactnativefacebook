import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
class SignIn extends Component<{}> {
    constructor(props) {
        super(props);
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
                            <TouchableOpacity>
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
                        >
                            <Text style={styles.signUpBtnTxt}>SIGN IN </Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{
                        justifyContent : 'center',
                        alignItems : 'center',
                    }} >
                        <Text style = {{color  : '#C9CACF' , marginVertical : 5 , fontWeight : 'bold'}}>OR SIGN IN WITH</Text>
                        <View style = {{flexDirection : 'row' , marginTop : 12 , paddingVertical : 8 }}>
                            <TouchableOpacity>
                            <Image style={{  width: 48, height: 48 , marginRight : 4}}
                                source={require('../Images/Google+.png')}
                            />
                            </TouchableOpacity>
                             <TouchableOpacity>
                            <Image style={{ width: 48, height: 48, marginLeft : 4 }}
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


export default SignIn