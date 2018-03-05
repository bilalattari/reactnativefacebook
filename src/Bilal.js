import React, { Component } from 'react';
// import Routes from './Route';
import {Provider} from 'react-redux';
import SignUpPage from './Component/SignupPage'
import CameraComp from './Component/Camera'
// import ImagePick from './Component/ImagePick'
import store from './Store';

class Bilal extends Component {
  render() {
    return (
      <Provider store={store}>
          <CameraComp />
     </Provider>
    );
  }
}

export default Bilal;