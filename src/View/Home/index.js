import React, { Component } from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation'
import RecommendScreen from './Recommend'
import AttentionScreen from './Attention'
import WorldScreen from './World'
import Header from '../../components/HeaderSearch'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('window').width
const City = ['北京', '上海', '深圳', '武汉', '广州', '杭州', '重庆', '天津']
const TabContent= createMaterialTopTabNavigator ({
  Recommend: {
    screen: RecommendScreen,
    navigationOptions: {
      tabBarLabel: '推荐'
    }
  },
  Attention: {
    screen: AttentionScreen,
    navigationOptions: {
      tabBarLabel: '关注'
    }
  },
  World: {
    screen: WorldScreen,
    navigationOptions: {
      tabBarLabel: '世界'
    }
  },
},
  {
    initialRouteName: 'Recommend',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition:'top',
    style: {//整体样式
      backgroundColor: '#51e0ce',
      width:screenWidth,
    },
    indicatorStyle: {//tab下的指示器样式
      height: 3,
      backgroundColor: '#fff',
      width: 30,
      marginStart:35,
    },
    labelStyle: {
      fontSize: 14,
      backgroundColor:'#fff'
    }
   }
   
  )

  const TabInNewMeg = createAppContainer(TabContent);
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
      <View style={{ flex: 1}}>
        {/* <FlatList
          data={this.state.City}
          renderItem={(data) => this._renderItem(data)}
        /> */}
        <View style={{paddingVertical:10}}><Header/></View>
        <View style={{flex:1}}><TabInNewMeg/></View>
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