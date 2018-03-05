import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { userInfo } from '../Store/Action/action'
import Camera from 'react-native-camera';
// import { Dropdown } from 'react-native-material-dropdown';
class CameraComp extends Component<{}> {
    constructor(props) {
        super(props);
        picUrl : ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>

                    <Camera
                        style={{
                            height: '70%',
                            width: '70%',
                        }}
                        ref={(com) => {
                            this.camera = com
                            {/* console.log(com) */}
                        }}
                        aspect={Camera.constants.Aspect.fill}
                    >
                    </Camera>
                        <Text style={styles.capture}
                            onPress={this.takePicture.bind(this)}
                        >
                            IMG
                    </Text>

                </View>
            </View>
        )
    }


    takePicture() {
        const options = {}
        this.camera.capture({ metadata: options }).then((data) => {
            console.log(data)
            this.setState ( {
                picUrl : data.path
            })
            console.log(this.state.picUrl , 'state')
        }).catch((error) => {
            console.log(error)
        })
    }
}

function mapStateToProp(state) {
    console.log(state, 'state')
    return ({

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // getUserInfo : (data)=>{
        //     dispatch(userInfo(data))
        //    }
    })
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    view: {
        flex: 1,
        alignItems: 'center'
    },

    capture: {
        flex: 0,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 1,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },

})
AppRegistry.registerComponent('CameraComp', () => CameraComp);
export default connect(mapStateToProp, mapDispatchToProp)(CameraComp)