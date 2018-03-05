import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { userInfo } from '../Store/Action/action'
// import Camera from 'react-native-camera';
// import { Dropdown } from 'react-native-material-dropdown';
class SignUpPage extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            role: '',
            depart: '',
            userName: '',
            emailAddress: '',
            conEmailAddress: '',
            password: ''
        }
    }

render() {
    // const isInvalid =
    //     this.state.emailAddress !== this.state.conEmailAddress ||
    //     this.state.password === '' ||
    //     this.state.userName === '' ||
    //     this.state.depart === '' ||
    //     this.state.role === '';
    return (
        <View style={{ backgroundColor: '#F8F9FE' }}>
            <ScrollView>

                <Header style={{ backgroundColor: '#2196F5' }}>
                    <Body>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: '#fff' }}>CREATE AN ACCOUNT </Text>
                        </TouchableOpacity>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'yellow' }}>JOIN MAGE </Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.imageStye}>
                    <Image
                        source={require('../Images/3.png')}
                    />
                </View>

                <View style={styles.container}>


                    {/* <Camera        
                    ref = {(com) => {
                        this.camera = com
                    }}
                    aspect = {Camera.constants.Aspect.fill}
                    >
                    <Text style ={styles.capture}
                    onPress = {this.takePicture.bind(this)}
                    >
                    [CAPTURE_IMAGE]
                    </Text>
                    </Camera> */}
                     {/* <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                    />
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style={styles.capture}
                        >
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View> */}
                 </View> 
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Using Mage As</Text>
                    <Form
                        style={{
                            height: 55,
                            backgroundColor: '#ffffff',
                            borderColor: '#ffffff',
                            borderWidth: 2,
                            borderRadius: 30,
                            padding: 8,
                            elevation: 5,
                            marginTop: 12
                        }}>
                        <Picker
                            onValueChange={(itemValue, itemIndex) => this.setState({ role: itemValue })}
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ paddingBottom: 10 }} >
                            <Item style={{ color: '#b3b3b3' }} label="Use As" value="key0" />
                            <Item label="Student" value="Student" />
                            <Item label="Admin" value="Admin" />
                        </Picker>
                    </Form>
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>School/University</Text>
                    <Item style={styles.input}>
                        <Input
                            onChangeText={(text) => {
                                console.log(text)
                                this.setState({ depart: text })
                            }}
                            value={this.state.text}
                            placeholder="School/University"
                            placeholderStyle={{ fontSize: 10 }}
                            placeholderTextColor="#b3b3b3"
                            style={{ marginLeft: "2%", fontSize: 15 }}
                        />
                        {/* <Icon name='school' style={styl.icons} /> */}
                        <Image style={{ width: 24, height: 20, marginRight: '4%' }}
                            source={require('../Images/Degree_icon.png')}
                        />
                    </Item>
                </View>


                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Pick a Username</Text>
                    <Item style={styles.input}>
                        <Input
                            onChangeText={(text) => {
                                console.log(text)
                                this.setState({ userName: text })
                            }}
                            value={this.state.text}
                            placeholder="Username"
                            placeholderStyle={{ fontSize: 10 }}
                            placeholderTextColor="#b3b3b3"
                            style={{ marginLeft: "2%", fontSize: 15 }}
                        />

                    </Item>
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Email Address</Text>
                    <Item style={styles.input}>
                        <Input
                            onChangeText={(text) => {
                                console.log(text)
                                this.setState({ emailAddress: text })
                            }}
                            value={this.state.text}
                            placeholder="Type Your Email"
                            placeholderStyle={{ fontSize: 10 }}
                            placeholderTextColor="#b3b3b3"
                            style={{ marginLeft: "2%", fontSize: 15 }}
                        />
                        {/* <Icon name='school' style={styl.icons} /> */}
                        <Image style={{ width: 24, height: 20, marginRight: '4%' }}
                            source={require('../Images/email_blue.png')}
                        />
                    </Item>
                    <Item style={{
                        height: 50,
                        backgroundColor: '#ffffff',
                        borderColor: '#ffffff',
                        borderWidth: 2,
                        borderRadius: 30,
                        padding: 12,
                        elevation: 5,
                        marginTop: 18
                    }}>
                        <Input
                            onChangeText={(text) => {
                                console.log(text)
                                this.setState({ conEmailAddress: text })
                            }}
                            placeholder="Confirm Your Email"
                            placeholderStyle={{ fontSize: 10 }}
                            placeholderTextColor="#b3b3b3"
                            style={{ marginLeft: "2%", fontSize: 15 }}
                        />
                        {/* <Icon name='school' style={styl.icons} /> */}
                        <Image style={{ width: 24, height: 20, marginRight: '4%' }}
                            source={require('../Images/email_blue.png')}
                        />
                    </Item>

                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Confirm Password</Text>
                    <Item style={styles.input}>
                        <Input
                            onChangeText={(text) => {
                                console.log(text)
                                this.setState({ password: text })
                            }}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                            placeholderStyle={{ fontSize: 10 }}
                            placeholderTextColor="#b3b3b3"
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
                        <Text style={styles.signUpBtnTxt}
                            onPress={() => {       
                                this.props.getUserInfo(this.state)
                                Actions.signIn()
                                console.log(this.state) }}
                        >JOIN MAGE </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
// takePicture = async function () {
//         console.log('camera' , this.camera)
//         // console.log('camera' ,this.camera.takePictureAsync(options))        
//         if (this.camera) {
//             const options = { quality: 0.5, base64: true };
//             const data = await this.camera.takePictureAsync(options)
//             console.log(data , 'bilal camera');
//         }
//     };

// takePicture(){
//     const options= {}
//     this.camera.capture({metadata : options}).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error)
//     })
// }
}

function mapStateToProp(state){
    console.log(state , 'state')
    return({
    
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    getUserInfo : (data)=>{
        dispatch(userInfo(data))
   }
    })
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        backgroundColor: '#5b85ef',
        height: 60,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
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
    imageStye: {
        alignItems: 'center',
        paddingTop: 15
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
        backgroundColor: '#FFFFFD',
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
        backgroundColor: '#2896ED',
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
AppRegistry.registerComponent('SignUpPage', () => SignUpPage);
export default connect( mapStateToProp ,mapDispatchToProp )(SignUpPage)