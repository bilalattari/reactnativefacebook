import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert , TextInput, Button } from 'react-native';
class SignUp extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    
    render() {
        return (
            <View style={styles.view}>

                <Text style={styles.header}> SignUp </Text>
                <Button
                    {/* onPress={this.showValue.bind(this)} */}
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
export default SignUp