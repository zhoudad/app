import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './View/Login'
import TabPage from './TabPage.js'
import TopPage from './TopPage.js'
import Page1 from './View/Home/Page1'
import Page2 from './View/Home/page2'
import Page3 from './View/Home/page3'
const Page = createStackNavigator({
  Page1: {
    screen: Page1,
    gesturesEnable: true,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  },
  Page2: {
    screen: Page2,
    gesturesEnable: true,
    navigationOptions: ({ navigation }) => ({
      title: 'page2'
    })
  },
  Page3: {
    screen: Page3,
    // header: null,
    gesturesEnable: true,//侧滑返回上一级
    navigationOptions: (props) => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const { params } = state
      return {
        title: params.title ? params.title : 'page1',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => {
              setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
            }}
          ></Button>
        )
      }
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  Main: {
    screen: TabPage,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  TopPage: {
    screen: TopPage,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
}, {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(Page);