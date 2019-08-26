import React, { Component } from 'react';
import AppNavigation from './src/AppNavigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import Group from './src/View/redux/Group'
import rootReducer from './src/reducers'
import {createAppContainer,} from 'react-navigation'
import SplashScreen from 'react-native-splash-screen';

const AppStackNavigation = createAppContainer(AppNavigation)
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    const store = createStore(rootReducer);
    return (
      <AppStackNavigation/>
    );
  }
}
