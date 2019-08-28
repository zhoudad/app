import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SvgIcon from '../../SvgIcon'

export default class page1 extends Component {
  // const {navigation} = this.props
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // toggleDrawer = () => {
  //   //Props to open/close the drawer
  //   this.props.navigationProps.toggleDrawer();
  // };
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home1</Text>
      </View>
    );
  }
}
