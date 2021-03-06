import React, { Component } from 'react';
import SvgIcon from '../../SvgIcon'
import * as WeChat from 'react-native-wechat';
import request from '../../utils/request';
import navigationUtil from '../../utils/navigation';
import { saveToken } from '../../utils/storage';
import { View, Text, ToastAndroid,Alert, AsyncStorage, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
// var Dimensions = require('Dimensions');
// import AsyncStorage from '@react-native-community/async-storage';
// import DeviceStorage from '../../DeviceStorage'
var { screenHeight, screenWidth } = Dimensions.get('window');
export default class Login extends Component {
  userInfo = {
    userNmae: '',
    userPassword: ''
  }
  constructor(props) {
    super(props);
    this.state = {
    //   userNmae: '',
    // userPassword: ''
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
  componentDidMount() {
    WeChat.registerApp('wxa309673c1ee433fa')
    // this.loadInitialState();
  }
  async loadInitialState() {
    var _that = this;
    try {
      await AsyncStorage.getItem('userInfo', function (errs, result) {
        console.log(result)
        if (result != null ) {
          _that.props.navigation.navigate('App')
        } else {
          return;
        }
      });
    } catch (err) {
      console.log(error)
    }

  }

  async save() {
    let userInfo = {
      'userNmae':this.userInfo.userNmae,
      'userPassword': this.userInfo.userPassword
    }
    console.log(userInfo)
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    } catch (error) {
      console.log(error)
    }
  }
  // async login() {
  //   try {
  //     if (this.userInfo.userNmae == '0000' && this.userInfo.userPassword == '0000') {
  //       ToastAndroid.show('登录成功', ToastAndroid.SHORT);
  //       this.save();
  //       this.props.navigation.navigate('App')
  //     }
  //   } catch (error) {
  //     ToastAndroid.show('登录失败', ToastAndroid.SHORT);
  //   }
  // }
  login = () => {
    const { userNmae, userPassword } = this.state;
    const self = this;
    request({
      method: 'POST',
      url: '/login',
      data: { userNmae, userPassword }
    })
      .then((data) => {
        console.log('登录成功：' + JSON.stringify(data));
        saveToken(data.data);
        navigationUtil.reset(self.props.navigation, 'App');
      })
      .catch(err => {
        console.log(err)
        // Alert.alert('登录失败', err.message || err);
      });
  };


  weixinLogin = () => {
    console.log('login open')
    let scope = 'snsapi_userinfo'
    let state = 'wechat_adk_mingjia'
    WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        if (isInstalled) {
          //获取微信授权
          WeChat.sendAuthRequest(scope, state)
            .then(responseCode => {
              console.log(responseCode)
              //授权成功获取token
              this.getAccessToken(responseCode);
            }).catch(error => {
              alert('授权错误：', error.message, [
                { text: '确定' }
              ])
            })
        } else {
          alert('没有安装微信', '请先安装微信', [
            { text: '确定' }
          ])
        }
      })
  }
  // 微信登陆获取token
  getAccessToken = (responseCode) => {
    switch (parseInt(responseCode.errCode)) {
      // 用户换取access_token的code，仅在ErrCode为0时有效  
      case 0:
        //获取token值
        axios({
          url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxa309673c1ee433fa&secret=59a2bc97079509e511ab7d0721f1028c&code=' + responseCode.code + '&grant_type=authorization_code'
        })
          .then(res => {
            //授权成功，获取用户头像等信息
            this.getUserInfoFormWx(res);
          })
          .catch(err => {
            console.log(err)
          })
        break;
      case -4:
        //用户拒绝
        break;
      case -2:
        //用户取消
        break;
    }
  }
  // 获取微信用户信息
  getUserInfoFormWx = (res) => {
    // console.log(res)
    axios({
      url: 'https://api.weixin.qq.com/sns/userinfo?access_token=' + res.access_token + '&openid=' + res.openid
    }).then(res => {
      // ToastAndroid.show('用户信息' + JSON.stringify(res),ToastAndroid.SHORT)
      this.props.navigation.navigate('App')
    }
    ).catch(err => { })
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
        <TouchableOpacity style={styles.LoginButton} onPress={() => this.login()}>
          <Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.otherLogin}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => { this.weixinLogin() }}>
            <SvgIcon name='weixin-1' size={38}></SvgIcon>
          </TouchableOpacity>
        </View>
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
  },
  otherLogin: {
    marginTop: 50,
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    height: 80,
    width: '100%',
    justifyContent: 'center'
  }
})