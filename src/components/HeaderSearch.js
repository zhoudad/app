import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import SvgIcon from '../SvgIcon'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          // onPress={() => this.props.navigation.navigate("ArticleDetails")}
          activeOpacity={1}
          style={{ height: 40, width: 340 }}>
          <View style={styles.headerIup}>
            <SvgIcon name='weixin-1' size={12} style={{ color: "#fff", marginEnd: 10 }}></SvgIcon>
            <Text style={{ color: "#ddd" }}>搜索文章</Text>
          </View>
        </TouchableOpacity>
        <SvgIcon name='weixin-1' size={18} style={{ color: "#2ab2c3" }}></SvgIcon>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 65,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#51e0ce'
    // #2ab2c3
  },
  headerIup: {
    flexDirection: 'row',
    height: 40,
    width: screenWidth*0.8,
    borderRadius: 22,
    backgroundColor: '#2ab2c3',
    paddingHorizontal: 15,
    alignItems: "center"
  }
})
