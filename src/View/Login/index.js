import React, { Component } from 'react';
import { View, Text, Button  } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button
            onPress={() => this.props.navigation.navigate('Main')}
            title="Go Main"
            color="#841584"
        />
      </View>
    );
  }
}
