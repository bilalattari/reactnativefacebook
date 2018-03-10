import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
// import { userInfo } from '../Store/Action/action'
// import Camera from 'react-native-camera';
// import { Dropdown } from 'react-native-material-dropdown';
class Main extends Component<{}> {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <View >
                <ScrollView>

                    <View style={{ backgroundColor: '#f8f9fe'  , height : '100%' }}>

                        <View style={{
                            flexDirection: 'row', height: 60, backgroundColor: '#fff',
                            borderBottomWidth: 2, borderColor: '#d6d7dc'
                        }}>
                            <View>
                            </View>
                            <View>
                                <Image style={{
                                    width: 72,
                                    height: 35,
                                    marginLeft: 20,
                                    marginTop: 8
                                }}
                                    source={require('../Images/mage_logo_menu.png')}
                                />
                            </View>
                            <View style={{
                                marginLeft: 63,
                                marginTop: 9,
                                marginBottom: 9,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: 112,
                                        height: 41,
                                        borderRadius: 25
                                    }}
                                    source={require('../Images/btn_yellow.png')} />
                                <View style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0,
                                    bottom: 0, justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>MASTER</Text>

                                </View>
                                <View style={{
                                    position: 'absolute',
                                    left: 12, top: 15
                                }}>
                                    <Image style={{
                                        width: 12,
                                        height: 12
                                    }}
                                        source={require('../Images/master_icon.png')} />
                                </View>
                            </View>
                            <View style={{
                                marginLeft: 5,
                                marginTop: 9,
                                marginBottom: 9,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: 72,
                                        height: 41,
                                        borderRadius: 25
                                    }}
                                    source={require('../Images/btn_blue.png')} />
                                <View style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0,
                                    bottom: 0, justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    left: 17, top: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <Image style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft: 3,
                                        marginRight: 4
                                    }}
                                        source={require('../Images/master_icon.png')} />
                                    <Text>5</Text>
                                </View>
                            </View>

                        </View>

                        <View style = {{
                         elevation: 5
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 12, marginHorizontal: 4
                            }}>
                                <Image
                                    style={{
                                        width: '93%',
                                        height: 152,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,

                                    }}
                                    source={require('../Images/Question_header.png')}
                                />
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: 26,
                                left: 41,
                            }}>
                                <Image
                                    style={{
                                        width: 102,
                                        height: 25,
                                        borderRadius: 25
                                    }}
                                    source={require('../Images/feature_btn.png')}
                                />
                            </View>
                            <View>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: 23,
                                    right: 41,
                                }}>
                                    <Image
                                        style={{
                                            width: 126,
                                            height: 36,
                                            borderRadius: 25
                                        }}
                                        source={require('../Images/question_btn_bg.png')} />
                                    <View style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0,
                                        bottom: 0, justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#f4f442' }}>09 Questions</Text>
                                    </View>
                                </View>
                            </View>
                            <View>

                            </View>

                            <View style={{
                                marginLeft: '4.5%',
                                marginRight: '4.6%',
                                paddingLeft: '3%',
                                borderColor: '#fdfeff',
                                borderWidth: 0.5,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                shadowColor: '#EFF4FA',
                                paddingTop: 5,
                                backgroundColor: '#ffffff'


                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#1F95F5',
                                }}>VETRENS DAY</Text>
                                <Text style={{
                                    paddingBottom: 12
                                }}>by Deksljklasdjlaskdjlsakd</Text>
                            </View>
                        </View>
                        <View style={{marginTop : 12 , marginHorizontal : 16 ,}}>
                            <View style={{
                                alignSelf: 'flex-end', position: 'absolute', borderBottomColor: '#eaedf2',
                                borderBottomWidth: 2, height: '50%', width: '63%', marginLeft: 5,
                                marginBottom: 8, 
                            }} />
                            <Text style={{
                                paddingRight: 4, color: '#007aca', marginLeft: 5,
                                marginBottom: 3 , fontWeight : 'bold' 
                            }}>IN PROGRESS
                            </Text>
                        </View>
                        <View>

                        <View style={{  marginTop : 12 , marginHorizontal : 16}}>
                            
                            <View >
                                 <Image style={{
                                    width: '38%',
                                    height: 125,
                                    borderRadius : 9    }}
                                    source={require('../Images/progress_card01.png')}
                                />
                            </View>
                             <View>
                                 <Image style={{
                                    width: '38%',
                                    height: 125,
                                    borderRadius : 9                                }}
                                    source={require('../Images/progress_card02.png')}
                                />
                            </View>
                            <View>
                                 <Image style={{
                                    width: '38%',
                                    height: 125,
                                    borderRadius : 9                                }}
                                    source={require('../Images/Progress_card03.png')}
                                />
                            </View> 
                            
                        </View>
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
        getUserInfo: (data) => {
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
        // height : 163,
        paddingTop: 5,
        borderWidth: 2,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopStartRadius: 19,
        borderColor: '#fff',
        marginLeft: '5%',
        marginRight: '5%'

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
AppRegistry.registerComponent('Main', () => Main);
export default connect(mapStateToProp, mapDispatchToProp)(Main)