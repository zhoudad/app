import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import SvgIcon from '../../SvgIcon'

export default class page3 extends Component {
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
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home3</Text>
      </View>
    );
  }
}
