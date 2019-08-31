import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

import App from './App';

// export default function Setup() {
    export default class Setup extends Component {
        componentDidMount() {
            SplashScreen.hide()
        }
        render() {
            return (
                <App />
            );
        }
    }

//     return Root;
// }