import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import RecommendScreen from './Recommend'
import AttentionScreen from './Attention'
import TopicScreen from './Topic'
import Header from '../../components/HeaderSearch'
import ScrollableTabView,
{
  DefaultTabBar,
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native';
const screenWidth = Dimensions.get('window').width
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <ScrollableTabView
            style={styles.container}
            renderTabBar={() => <ScrollableTabBar
            style={{height:35}} 
            tabStyle={{height:34,paddingLeft: 15,paddingRight: 15,}}
            />}
            tabBarUnderlineStyle={styles.lineStyle}
            tabBarActiveTextColor='#FFF'//激活时默认选项卡栏文本的颜色
            tabBarBackgroundColor='#51e0ce'//默认选项卡栏背景的颜色
            tabBarInactiveTextColor='#F5FCFF'//不活动时默认选项卡栏文本的颜色
          // tabBarTextStyle = {fontSize:16}
          >
            <View style={styles.Screentyle} tabLabel='推荐'>
              <RecommendScreen />
            </View>
            <View style={styles.Screentyle} tabLabel='关注'>
              <AttentionScreen />
            </View>
            <View style={styles.Screentyle} tabLabel='话题'>
              <TopicScreen />
            </View>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    // width: screenWidth / 4,
    width: 20,
    height: 2,
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    marginLeft: 20
  },
  Screentyle: {
    flex: 1,
    // fontSize: 20,
    // marginTop: 20,
    // textAlign: 'center',
  },

})