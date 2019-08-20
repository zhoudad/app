import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('window').width
const City = ['北京', '上海', '深圳', '武汉', '广州', '杭州', '重庆', '天津']

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      City: City,
    };
  }
  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.Text}>{data.item}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1,  paddingVertical: 10 }}>
        <FlatList
          data={this.state.City}
          renderItem={(data) => this._renderItem(data)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ddd',
    height: 55,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})