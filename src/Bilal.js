import React, { Component } from 'react';
// import Routes from './Route';
import {Provider} from 'react-redux';
import SignUpPage from './Component/SignupPage'
import Facebook from './Component/Facebook'
import CameraComp from './Component/Camera'
import Screens from './Component/Nav'
// import ImagePick from './Component/ImagePick'
import store from './Store';

class Bilal extends Component {
  render() {
    return (
      <Provider store={store}>
          <Screens />
     </Provider>
    );
  }
}

export default Bilal;