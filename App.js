import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/View/Login'
import RootPage from './src/RootPage.js'

const App = createStackNavigator({
  Login: {
    screen: LoginScreen,
    // navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  Main: {
    screen: RootPage,
    // navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
}
);

export default createAppContainer(App);