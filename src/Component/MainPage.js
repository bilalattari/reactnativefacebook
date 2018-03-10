import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, AppRegistry } from 'react-native';
import { Container, Header, Left, Text, Body, Right, Button, Badge, Icon, Title, Content, Card, CardItem } from 'native-base';
class MainPage extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View>
                <Header style={{ backgroundColor: '#2196F3' }}>
                    <Body>
                        <TouchableOpacity >
                            <Image
                              source={require('../Images/mage_logo_menu.png')}
                              style={{ width: '10%' , height : '10%' }}
                            />

                        </TouchableOpacity>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={
                            () => {
                                console.log('go to login page')
                                this.props.navigation.navigate('signUp')
                            }
                        }>
                            <Text style={{ fontSize: 12, color: 'yellow' }}>CREATE AN ACCOUNT </Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View>
                    
                    <Text>
                        salam
                   </Text>
                   <View>
                        <Image
                              source={require('../Images/Question_header.png')}
                              style={{ width: '10%' , height : '10%' }}
                            />
                   </View>
                </View>

            </View>


        )
    }
}
const styles = StyleSheet.create({
    stretch: {
        backgroundColor: '#fff'
    },
    headerBody: {
        marginLeft: 80
    }

})


export default MainPage