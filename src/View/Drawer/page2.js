import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import SvgIcon from '../../SvgIcon'

export default class page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Drawer Page2</Text>
        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.toggleDrawer()}>
            <SvgIcon name='list' size={38}></SvgIcon>
          </TouchableOpacity> */}
      </View>
    );
  }
}
