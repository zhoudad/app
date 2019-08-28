import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async removeInfo() {
    var _that = this;
    var userInfo = ['userNmae', 'userPassword'];
    try {
      await AsyncStorage.removeItem(userInfo,err => {
        return
      });
      ToastAndroid.show('清除完成', ToastAndroid.SHORT);
      // _that.props.navigation.replace('Login')
    } catch (error) {
      return
    }
  }
  logOut(){
    let resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: 'Login'})
        ]
    });
    this.props.navigation.dispatch(resetAction)
    removeInfo()
}

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={this.logOut} style={styles.button}>
          <Text style={{lineHeight:45,textAlign:'center',fontSize:17}}>退出登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    borderRadius: 4,
    height: 45,
    backgroundColor: '#ddd',
    marginTop: 20
  }
});
