import React, { Component } from 'react';
import SvgIcon from '../../SvgIcon'
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
  componentDidMount() {
    this.loadInitialState();
  }
  async loadInitialState() {
    var _that = this;
    var userInfo = ['userNmae', 'userPassword'];
    AsyncStorage.multiGet(userInfo, function (errs, result) {
      if (result[0][1] != null || result[1][1] != null) {
        _that.props.navigation.replace('Main')
      }else{
        return;
      }
    });
  }

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

  weixinLogin = () => {
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
          url:'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx07cb98a4feb4b5b3&secret=9346d8becf27b8c4ebc8b3fe3e17f7ed&code=' + responseCode.code + '&grant_type=authorization_code'
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
    console.log(res)
    axios({
      url:'https://api.weixin.qq.com/sns/userinfo?access_token=' + res.access_token + '&openid=' + res.openid
    }).then(res => {
        // ToastAndroid.show('用户信息' + JSON.stringify(res),ToastAndroid.SHORT)
        console.log(res)
        this.props.navigation.navigate('Select')
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
        <TouchableOpacity style={styles.LoginButton} onPress={this.login}>
          <Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.otherLogin}>
          <TouchableOpacity activeOpacity={0.8}>
            <SvgIcon name='my' size={38}></SvgIcon>
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
  otherLogin:{
    marginTop:50,
    alignItems:'center',
    borderTopColor:'#ddd',
    borderTopWidth:1,
    height:80,
    width:'100%',
    justifyContent:'center'
  }
})