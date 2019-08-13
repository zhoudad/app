import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){

  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        <Text style={{textAlign:'center',lineHeight:50,fontSize:18}}> Home </Text>
      </View>
    );
  }
}


