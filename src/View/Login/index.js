import React, { Component } from 'react';
import { View, Text, ToastAndroid, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView, AsyncStorage } from 'react-native';
// var Dimensions = require('Dimensions');
var { screenHeight, screenWidth } = Dimensions.get('window');
export default class Login extends Component {
  userInfo = {
    userNmae: '',
    userPassword: ''
  }
  constructor(props) {
    super(props);
    this.state = {
    };
    this.save = this.save.bind(this)
    this.login = this.login.bind(this)
  }
  //获取账号
  getUserInfoName = (text) => {
    this.userInfo.userNmae = text
  }
  //获取密码
  getUserInfoPassw = (text) => {
    this.userInfo.userPassword = text
  }
  // componentDidMount() {
  //   this.loadInitialState();
  // }
  //初始化数据-默认从AsyncStorage中获取数据
  // loadInitialState() {
  //   var _that = this;
  //   var userInfo = ['userNmae', 'userPassword'];
  //   AsyncStorage.multiGet(userInfo, function (errs, result) {
  //     console.log(result)
  //     if (result[0] != null || result[1] != null) {
  //       _that.props.navigation.replace('Main')
  //     }else{
  //       return;
  //     }
  //   });
  // }

  async save() {
    var userInfo = [
      ['userNmae', this.userInfo.userNmae],
      ['userPassword', this.userInfo.userPassword]
    ]
    try {
      await AsyncStorage.multiSet(userInfo, function (errs) {
        
      })
    }catch(error) {
      return 
    }
  }
  async login () {
    try {
      if (this.userInfo.userNmae == '0000' && this.userInfo.userPassword == '0000') {
        ToastAndroid.show('登录成功', ToastAndroid.SHORT);
        this.save();
        this.props.navigation.replace('Main')
      } 
    }catch(error) {
      ToastAndroid.show('登录失败', ToastAndroid.SHORT);
    }
  }


  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <View>
          <TextInput
            placeholder="请输入账号"
            style={styles.LoginInput}
            onChangeText={this.getUserInfoName}
          ></TextInput>
          <TextInput
            placeholder="请输入密码"
            style={styles.LoginInput}
            secureTextEntry={true}
            onChangeText={this.getUserInfoPassw}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.LoginButton} onPress={this.login}>
          <Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  LoginButton: {
    width: 200,
    borderRadius: 4,
    height: 45,
    backgroundColor: '#ddd',
    marginTop: 20
  },
  LoginInput: {
    width: 300,
    height: 45,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 15
  }
})