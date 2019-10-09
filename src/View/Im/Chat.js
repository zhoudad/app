import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet, Keyboard, FlatList } from 'react-native';
const screenWidth = Dimensions.get('window').width

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCommentInput: false,
      commentContent: '',
      ChatList: [
        {
          id: 1,
          chatConntent: '周箫是帅哥'
        }
      ]
    };
  }
  sendDM = () => {
    this.setState({
      ChatList: [...this.state.ChatList, { id: 1, chatConntent: this.state.commentContent}],
      isShowCommentInput: false 
    })
    Keyboard.dismiss()
  }

  renderCommentInput() {
    if (this.state.isShowCommentInput) {
      return (
        <View style={{
          backgroundColor: 'white', position: 'absolute',
          ...Platform.select({
            android: {
              bottom: 0,
            },
            ios: {
              bottom: this.state.keyboardOffset,
            }
          })
          , left: 0, right: 0, flexDirection: 'row', alignItems: 'center'
        }}>
          <TextInput
            ref={"commentInput"}
            style={{
              marginStart: 15, marginEnd: 10, marginTop: 4,
              marginBottom: 4, height: 40, width: screenWidth - 70, backgroundColor: 'white',
              paddingLeft: 14, borderWidth: 1, borderRadius: 22, borderColor: '#CCCCCC'
            }}
            placeholder={'commentInput'}
           // underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
            onChangeText={(commentContent) => this.setState({ commentContent })}
          />
          <TouchableOpacity style={{ width: 70, marginRight: 0, marginBottom: 0 }}
            onPress={() => this.sendDM()}
            activeOpacity={1}
          >
            <Text>发送</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return null;
    }
  }

  renderBtn () {
    if(!this.state.isShowCommentInput){
      return(
        <TouchableOpacity
          onPress={() => {
            this.setState({ isShowCommentInput:true}, () => {
              this.refs.commentInput.focus()
            })
          }}
          style={styles.PlusChatBtn}
        >
          <Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      )
    }else{
      return null
    }
  }

  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={{color:'#fff',lineHeight:40,marginRight:15,backgroundColor:'#ddd',paddingHorizontal:10,borderRadius:8}}>{data.item.chatConntent}</Text>
        <View style={{width:36,height:36,borderRadius:18,backgroundColor:'yellow',marginRight:20}}></View>
      </View>
    )
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <View style={{alignItems:'flex-end'}}>
          <FlatList
            data={this.state.ChatList}
            renderItem={(data) => this._renderItem(data)}
          />
        </View>
        {this.renderBtn()}
        {this.renderCommentInput()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  PlusChatBtn: {
    width: 45,
    height: 45,
    backgroundColor: '#ddd',
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  item:{
    height:50,
    borderRadius:4,
    justifyContent:'flex-end',
    paddingHorizontal:10,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
  }
})