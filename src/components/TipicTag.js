import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TipicTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Text style={{ color: "#51e0ce", paddingHorizontal:2 }}>#{this.props.tag}# </Text>
    );
  }
}
