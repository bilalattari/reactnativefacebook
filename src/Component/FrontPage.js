import React, { Component } from 'react';
import BackgroundImage from './BackgroundImage'
import { AppRegistry, Text, StyleSheet, View, Alert, Image, TextInput, Button } from 'react-native';
class FrontPage extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
              
                <View>
                    {/* <BackgroundImage> */}
                 <Image
                    style={styles.logo}                
                    source={require('../Images/3.png')} />
                </View>
                <View>
                    <Image
                        style={styles.stretch}
                        source={require('../Images/2.png')} />
                </View>
                {/* </BackgroundImage> */}
                        

               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    stretch: {
        marginTop: '10%',
        margin: 20,
        width: 320,
        height: 380,
    },
    logo: {
        marginTop: '20%',
        margin: 10,
        // width: 20
        // height: 380
    },

    header: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    view: {
        backgroundColor: '#fff',
        alignItems : 'center',
        height : '100%'
    },
    
})
export default FrontPage