import { createStackNavigator, createAppContainer, AsyncStorage } from 'react-navigation';
import LoginScreen from './src/View/Login'
import RootPage from './src/RootPage.js'
const loadInitialState = () => {
  var userInfo = ['userNmae', 'userPassword'];
  AsyncStorage.multiGet(userInfo, function (errs, result) {
    if (result[0] != null || result[1] != null) {
      // return 'Main'
      _that.props.navigation.replace('Main')
    } else {
      return ;
    }
  });
}
export default function App(){
  loadInitialState()
  // let screen = true
  // var userInfo = ['userNmae', 'userPassword'];
  // AsyncStorage.multiGet(userInfo, function (errs, result) {
  //   if (result[0] != null || result[1] != null) {
      
  //   } else {
  //     return ;
  //   }
  // })
  const Page = createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
    },
    Main: {
      screen: RootPage,
      navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
    },
  }, {
      initialRouteName: 'Login',
    }
  );
  return createAppContainer(Page)
}

// export default ;