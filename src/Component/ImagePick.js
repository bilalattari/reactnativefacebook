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

    var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

ImagePicker.launchCamera(options, (response)  => {
  console.log('Response = ', response);
});
    // ImagePicker.launchImageLibrary(options, (response)  => {
    //     console.log('Response = ', response);
    // });
}
Images(){
    console.log('image')

    var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

    ImagePicker.launchImageLibrary(options, (response)  => {
        console.log('Response = ', response);
    });
}
    render() {
        return (
            <View  style = {{
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                <Text>Image Picker</Text>
                <TouchableOpacity
                
                onPress = {this.Image.bind(this)}
                >
                   <Text>Cameraz</Text> 
                   
                </TouchableOpacity>
                 <TouchableOpacity
                
                onPress = {this.Images.bind(this)}
                >
                   <Text>Gallery</Text> 
                   
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