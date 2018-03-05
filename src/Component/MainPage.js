import React, { Component } from 'react';
import {  StyleSheet, View, Image  } from 'react-native';
import { Container, Header, Left, Text , Body, Right, Button , Badge , Icon, Title , Content, Card, CardItem} from 'native-base';
class MainPage extends Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
         <Container>
        <Header style = {styles.stretch}>
          <Left>
            <Image source={require('../Images/signUp.png')}  />
          </Left>
          <Body >
              <Button transparent  >
              <Icon name='home' />
              <Text>Mage Body</Text>
          </Button>
          </Body>
          <Right>
          <View>
          <Button>
              <Text>Mage</Text>
          </Button>
          </View>
          </Right>
        </Header>
            <Content>
                <View>
                    <Text>
                        Bilal raza
                    </Text>
                </View>
             </Content>
      </Container>

        )
    }
}
const styles = StyleSheet.create({
    stretch: {
        backgroundColor : '#fff'
    },
    headerBody : {
        marginLeft: 80
    }

})


export default MainPage