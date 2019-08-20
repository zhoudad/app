import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class Im extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Chat')}
        style={{width:150,height:50,borderColor:'#ddd',borderWidth:1}}
        >
          <Text style={{lineHeight:50,textAlign:'center'}}>
            进入聊天
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
