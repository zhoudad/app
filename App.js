import React, { Component } from 'react';
import AppNavigation from './src/AppNavigation'
import {createAppContainer,} from 'react-navigation'
import SplashScreen from 'react-native-splash-screen';

const AppStackNavigation = createAppContainer(AppNavigation)
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <AppStackNavigation/>
    );
  }
}
