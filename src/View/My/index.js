import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async removeInfo() {
    try {
      await AsyncStorage.removeItem(userInfo);
    } catch (error) {
      return
    }
  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={this.removeInfo} style={styles.button}>
          <Text style={{lineHeight:45,textAlign:'center',fontSize:17}}>清除Info</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    borderRadius: 4,
    height: 45,
    backgroundColor: '#ddd',
    marginTop: 20
  }
});