import React, { Component } from 'react';
import {createAppContainer,} from 'react-navigation'
// import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  View
} from 'react-native';

import configAppNavigator from './AppNavigation';
import { refreshToken } from './utils/request';

class App extends Component {
  state = {
    checkedLogin: false
  };

  componentDidMount() {
    // SplashScreen.hide()
    const self = this;
    refreshToken()
      .then(() => self.setState({ checkedLogin: true, isLoggedIn: true }))
      .catch(err => {
        console.log(err);
        self.setState({
          checkedLogin: true,
          isLoggedIn: false
        });
      });
  }

  render() {
    const { checkedLogin, isLoggedIn } = this.state;
    if (!checkedLogin) {
      return null;
    }
    // const AppNavigator = configAppNavigator(isLoggedIn);
    const AppStackNavigation = createAppContainer(configAppNavigator(isLoggedIn))
    return (
      <View style={styles.container}>
        <AppStackNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;