import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './View/Login'
import TabPage from './TabPage.js'
const Page = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  Main: {
    screen: TabPage,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
}, {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(Page);