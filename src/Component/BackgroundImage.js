import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Alert, Image, TextInput, Button } from 'react-native';
class BackgroundImage extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image source={require('../Images/2.png')} 
            style={styles.backgroundImage}>                    
            </Image>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        opacity : 0.2
    }
});


export default BackgroundImage