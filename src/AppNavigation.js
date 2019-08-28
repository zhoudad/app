import React, { Component } from 'react'
import { Button, ScrollView, View, TouchableOpacity,Dimensions,Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import {createReactNavigationRdeduxMiddleware,readuxifyNavigator} from 'react-navigation-redux-helpers'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  DrawerItems,
  createSwitchNavigator
  // SafeAreaView,
} from 'react-navigation';
// import DrawerPage from './View/Drawer'
import LoginScreen from './View/Login'
import HomeScreen from './View/Home'
import ImScreen from './View/Im'
import PendingScreen from './View/Pending'
import WriteScreen from './View/Write'
import MyScreen from './View/My'
import Ionicons from './SvgIcon.js'
import Page1 from './View/Home/Page1'
import Page2 from './View/Home/page2'
import Page3 from './View/Home/page3'
import FlatListComt from './View/Home/FlatListComt'
import Chat from './View/Im/Chat'
import GroupCom from './components/Group'

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
var { screenHeight, screenWidth } = Dimensions.get('window');
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  // toggleDrawer = () => {
  //   //Props to open/close the drawer
  //   this.props.navigationProps.toggleDrawer();
  // };
  render() {
    const { navigation } = this.props
    // console.log(screenWidth/3 )
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          {/*Donute Button Image */}
          <Ionicons name='list' size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

const DrawerPage = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => {
        <MaterialIcon name='drafts' size={24} style={{ color: tintColor }} />
      }
    }
  },
  GroupCom: {
    screen: GroupCom,
    navigationOptions: {
      drawerLabel: 'GroupCom',
      drawerIcon: ({ tintColor }) => {
        <MaterialIcon name='move-to-inbox' size={24} style={{ color: tintColor }} />
      }
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      drawerLabel: 'Page3',
      drawerIcon: ({ tintColor }) => {
        <MaterialIcon name='move-to-inbox' size={24} style={{ color: tintColor }} />
      }
    }
  },
}, {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    // contentComponent: (props) => {
    //   <ScrollView style={{ backgroundColor: '#456', flex: 1, }}>
    //     <SafeAreaView
    //       forceInset={{ top: 'always', horizontal: 'never' }}
    //     >
    //       <DrawerItems {...props} />
    //     </SafeAreaView>
    //   </ScrollView>
    // }
  })


const TopPage = createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Home1'
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Home2'
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Home3'
    }
  },
}, {
    tabBarOptions: {
      tabStyle: {
        width:100,
        fontSize:18,
      },
      upperCaseLabel: false,//是否大写
      scrollEnabled: true,//是否支持滑动
      style: {//整体样式
        backgroundColor: '#51e0ce',
        width:screenWidth
      },
      indicatorStyle: {//tab下的指示器样式
        height: 3,
        backgroundColor: '#fff',
        width: 30,
        marginStart:35,
      },
      labelStyle: {
        fontSize: 14,
      }
    }
  })

const TabPage = createBottomTabNavigator({
  Home: {
    screen: TopPage,
    navigationOptions: {
      // tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name={'home-1'} size={20} style={{ color: tintColor }} />
          <Text style={{marginTop:3,color:tintColor,fontSize:11}}>首页</Text>
        </View>
      ),
    }
  },
  Pending: {
    screen: PendingScreen,
    navigationOptions: {
      tabBarLabel: '附近',
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name={'dingwei-1'} size={20} style={{ color: tintColor }} />
          <Text style={{marginTop:3,color:tintColor,fontSize:11}}>附近</Text>
        </View>
      )
    }
  },
  Write: {
    screen: WriteScreen,
    navigationOptions: {
      // tabBarLabel: '1',
      tabBarVisible:false,
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{width:28,height:22,borderRadius:3,backgroundColor:'#51e0ce'}}>
          
        </View>
      )
    }
  },
  Im: {
    screen: ImScreen,
    navigationOptions: {
      // tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name={'xiaoxi-2'} size={20} style={{ color: tintColor }} />
          <Text style={{marginTop:3,color:tintColor,fontSize:11}}>消息</Text>
        </View>
      )
    }
  },
  My: {
    screen: MyScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons name={'wode-3'} size={20} style={{ color: tintColor }} />
          <Text style={{marginTop:3,color:tintColor,fontSize:11}}>我的</Text>
        </View>
      ),
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#51e0ce',
      pressOpacity: 0.8,
      showLabel:false,
    }
  });

const AppStack = createStackNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: 'Chat',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
      },
      headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
      },
    }),
  },
  FlatListComt: {
    screen: FlatListComt,
    navigationOptions: {
      tabBarLabel: 'FlatListComt'
    }
  },
  Page1: {
    screen: Page1,
    gesturesEnable: true,
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.name}`,
      title: `Page1`,
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
    })
  },
  Page2: {
    screen: Page2,
    gesturesEnable: true,
    navigationOptions: ({ navigation }) => ({
      title: 'page2',
      headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
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
        ),
        headerRight: <NavigationDrawerStructure navigationProps={navigation} />,
      }
    }
  },
  Main: {
    screen: TabPage,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  TopPage: {
    screen: TopPage,
    navigationOptions: ({ navigation }) => ({
      title: 'TopPage',
      header: null,
      gesturesEnable: true
    })
  },
  DrawerPage: {
    screen: DrawerPage,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  }
}, {
    initialRouteName: 'Main'
  });
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
})

export default createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
    initialRouteName: 'Auth'
  })

// export default createAppContainer(AppNavigation);