import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert , TextInput, Button } from 'react-native';
class SignUp extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        };
    }
    showValue() {
        Alert.alert('well done')
        this.setState({
            userName: '',
            email: '',
            password: ''
        })
    }

    onUsernameHandler(text) {
        this.setState({
            userName: text
        })
    }
    onemailHandler(text) {
        this.setState({
            email: text
        })
    }
    onpasswordHandler(text) {
        this.setState({
            password: text
        })
    }
    render() {
        return (
            <View style={styles.view}>

                <Text style={styles.header}> SignUp </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.onUsernameHandler({text})}
                    placeholder='UserName'
                    value={this.state.userName} />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.onemailHandler({text})}
                    placeholder='User Email'
                    type = 'email-address'
                    value={this.state.email} />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText= {(text) => this.onpasswordHandler({text})}
                    placeholder='User Password'
                    type = 'password'
                    value={this.state.password} />
                <Button
                    onPress={this.showValue.bind(this)}
                    title="Sign Up"
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