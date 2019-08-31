import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,Dimensions} from 'react-native';
import SvgIcon from '../../SvgIcon'

var { screenHeight, screenWidth } = Dimensions.get('window');
export default class page1 extends Component {
  // const {navigation} = this.props
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{flex:1}}>
        
      </View>
    );
  }
}
