import React, { Component } from 'react';
import RootPage from './src/RootPage'

import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <RootPage/>
    );
  }
}
