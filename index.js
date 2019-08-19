/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigation from './src/AppNavigation'
import {createAppContainer,} from 'react-navigation'
import {name as appName} from './app.json';

const AppStackNavigation = createAppContainer(AppNavigation)
// AppRegistry.registerComponent(appName, () => AppStackNavigation);
AppRegistry.registerComponent(appName, () => App);
