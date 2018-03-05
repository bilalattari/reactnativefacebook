import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, Left, Body, Right, Title, Item, Input, Icon, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker'
class ImagePick extends Component<{}> {
    constructor(props) {
        super(props);
    }
Image(){
    console.log('image')
}
    render() {
        return (
            <View >
                <Text>Image Picker</Text>
                <TouchableOpacity
                onPress = {this.Image.bind(this)}
                >
                    Click Plz
                </TouchableOpacity>
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
AppRegistry.registerComponent('ImagePick', () => ImagePick);
export default connect(mapStateToProp, mapDispatchToProp)(ImagePick)