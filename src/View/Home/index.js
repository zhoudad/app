import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <TouchableOpacity
          style={styles.PageButton}
          onPress={() => {
            navigation.navigate('Page1', { name: '动态' })
          }}
          activeOpacity={0.8}
        >
          <Text style={{textAlign:'center',lineHeight:50}}>Go page1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PageButton}
          onPress={() => {
            navigation.navigate('Page2')
          }}
          activeOpacity={0.8}
        >
          <Text style={{textAlign:'center',lineHeight:50}}>Go page2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PageButton}
          onPress={() => {
            navigation.navigate('Page3', { name: 'Div' })
          }}
          activeOpacity={0.8}
        >
          <Text style={{textAlign:'center',lineHeight:50}}>Go page3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PageButton}
          onPress={() => {
            navigation.navigate('TopPage')
          }}
          activeOpacity={0.8}
        >
          <Text style={{textAlign:'center',lineHeight:50}}>Go TopPage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.PageButton}
          onPress={() => {
            navigation.navigate('DrawerPage')
          }}
          activeOpacity={0.8}
        >
          <Text style={{textAlign:'center',lineHeight:50}}>Go DrawerPage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  PageButton: {
    width: screenWidth * 0.8,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginVertical: 20,
    // textAlign:'center',
    // lineHeight:50,
  }
})