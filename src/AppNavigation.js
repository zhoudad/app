import React, { Component } from 'react'
import { Button, ScrollView, View, TouchableOpacity } from 'react-native';
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
import MyScreen from './View/My'
import Ionicons from './SvgIcon.js'
import Page1 from './View/Home/Page1'
import Page2 from './View/Home/page2'
import Page3 from './View/Home/page3'
import FlatListComt from './View/Home/FlatListComt'
import Chat from './View/Im/Chat'
import GroupCom from './components/Group'

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  // toggleDrawer = () => {
  //   //Props to open/close the drawer
  //   this.props.navigationProps.toggleDrawer();
  // };
  render() {
    const { navigation } = this.props
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
      tabBarLabel: 'Page1'
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Page2'
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Page3'
    }
  },
}, {
    tabBarOptions: {
      tabStyle: {
        minWidth: 50,
      },
      upperCaseLabel: false,//是否大写
      scrollEnabled: true,//是否支持滑动
      style: {//整体样式
        backgroundColor: '#51e0ce',
      },
      indicatorStyle: {//tab下的指示器样式
        height: 2,
        backgroundColor: '#ddd',
        // width: 50,
      },
      labelStyle: {
        fontSize: 13,
        marginVertical: 6
      }
    }
  })

const TabPage = createBottomTabNavigator({
  Home: {
    screen: DrawerPage,
    navigationOptions: {
      tabBarLabel: 'list',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'list' : 'list-1'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
      activeTintColor: 'green'
    }
  },
  Im: {
    screen: ImScreen,
    navigationOptions: {
      tabBarLabel: 'Im',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'im-1' : 'im'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  My: {
    screen: MyScreen,
    navigationOptions: {
      tabBarLabel: 'My',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'my' : 'my-1'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#51e0ce',
      pressOpacity: 0.8,
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