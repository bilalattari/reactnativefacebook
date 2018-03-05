import React, { Component } from 'react';
import {Text , StyleSheet  , View} from 'react-native';
class Header extends Component<{}> {
    
  render() {
    return (
        <View style = {styles.view}>  
        
    <Text style = {styles.header}> Header </Text>
        </View>
    )
 }
} 

const styles = StyleSheet.create({
    header : {
    color : 'black' ,
    fontSize : 20,
    textAlign : 'center',
},
   view : {
    backgroundColor : 'green' ,
   }
})
export default Header