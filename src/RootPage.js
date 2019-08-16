import React from 'react';
import { Button,ScrollView,SafeAreaView,DrawerItems } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { 
  createStackNavigator,
   createAppContainer,
   createDrawerNavigator,
   createMaterialTopTabNavigator,
   createBottomTabNavigator,
  } from 'react-navigation';
import LoginScreen from './View/Login'
import HomeScreen from './View/Home'
import ImScreen from './View/Im'
import MyScreen from './View/My'
import Ionicons from './SvgIcon.js'
import Page1 from './View/Home/Page1'
import Page2 from './View/Home/page2'
import Page3 from './View/Home/page3'

const DrawerPage = createDrawerNavigator({
  Page1:{
      screen:Page1,
      navigationOptions:{
          drawerLabel:'Page1',
          drawerIcon:({tintColor}) => {
              <MaterialIcon name='drafts' size={24} style={{color:tintColor}} />
          }
      }
  },
  Page2:{
      screen:Page2,
      navigationOptions:{
          drawerLabel:'Page2',
          drawerIcon:({tintColor}) => {
              <MaterialIcon name='move-to-inbox' size={24} style={{color:tintColor}} />
          }
      }
  },
  Page3:{
      screen:Page3,
      navigationOptions:{
          drawerLabel:'Page3',
          drawerIcon:({tintColor}) => {
              <MaterialIcon name='drafts' size={24} style={{color:tintColor}} />
          }
      }
  },
},{
  initialRouteName:'Page1',
  contentOptions:{
      activeTintColor:'#e91e63'
  },
  contentComponent:(props) =>{
      <ScrollView style={{backgroundColor:'#456',flex: 1,}}>
          <SafeAreaView
              forceInset={{top: 'always',horizontal:'naver'}}
          >
              <DrawerItems {...props}/>
          </SafeAreaView>
      </ScrollView>
  }
})


const TopPage = createMaterialTopTabNavigator({
  Page1:{
      screen:Page1,
      navigationOptions:{
          tabBarLabel:'Page1'
      }
  },
  Page2:{
      screen:Page2,
      navigationOptions:{
          tabBarLabel:'Page2'
      }
  },
  Page3:{
      screen:Page3,
      navigationOptions:{
          tabBarLabel:'Page3'
      }
  },
},{
  tabBarOptions:{
      tabStyle:{
          minWidth:50,
      },
      upperCaseLabel:false,//是否大写
      scrollEnabled:true,//是否支持滑动
      style:{//整体样式
          backgroundColor:'#ccc',
      },
      indicatorStyle:{//tab下的指示器样式
          height:2,
          backgroundColor:'#222',
          width:50,
      },
      labelStyle:{
          fontSize:13,
          marginVertical:6
      }
  }
})

const TabPage = createBottomTabNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
          tabBarLabel: 'list',
          tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                  name={focused ? 'list' : 'list-1'}
                  size={26}
                  style={{color:tintColor}}
              />
          ),
          activeTintColor : 'green'
      }
  },
  Im: {
      screen: ImScreen,
      navigationOptions: {
          tabBarLabel: 'Im',
          tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                  name={focused ? 'im-1' : 'im'}
                  size={26}
                  style={{color:tintColor}}
              />
          )
      }
  },
  My: {
      screen: MyScreen,
      navigationOptions: {
          tabBarLabel: 'My',
          tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                  name={focused ? 'my' : 'my-1'}
                  size={26}
                  style={{color:tintColor}}
              />
          ),
      }
  },
},{
  tabBarOptions:{
      activeTintColor: '#51e0ce',
      pressOpacity: 0.8,
  }
});


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
  DrawerPage:{
    screen:DrawerPage,
    navigationOptions:{
      title:'DrawerPage'
    }
  }
}, {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(Page);