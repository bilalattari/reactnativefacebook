import React, { Component } from 'react';
import {Scene , Router } from 'react-native-router-flux'
import SignUpPage from './Component/SignupPage'


class Router extends Component {
  render() {
    return (
      <Router sceneStyle = {{paddingTop : 65}}>
          <Scene key = 'signUp' component = {SignUpPage}title = 'Please Sign Up'  />
          <Scene key = 'signIn' component = {SignUpPage}title = 'Please Sign Up'  />
      </Router>
    );
  }
}

export default Router;