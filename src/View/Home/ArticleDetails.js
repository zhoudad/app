import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TipicTag from '../../components/TipicTag'
import CommentItem from '../../components/commentItem'

export default class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.articleInfo}>
          <View style={styles.headerImg}>
            <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: "#51e0ce" }}></View>
          </View>
          <View style={{ marginLeft: 10, flex: 1, height: 50, justifyContent: 'center' }}>
            <Text style={{ fontSize: 13, lineHeight: 16, color: "#333", marginTop: 11 }}>周大大</Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ fontSize: 12, lineHeight: 25, color: "#aaa" }}>杭州</Text>
              <Text style={{ marginHorizontal: 6, lineHeight: 25 }}>.</Text>
              <Text style={{ fontSize: 12, lineHeight: 25, color: "#ccc" }}>一个小时前</Text>
            </View>
          </View>
          <View style={{ width: 50, height: 20, borderRadius: 10, backgroundColor: '#51e0ce', }}>
            <TouchableOpacity style={{ flex: 1, }} activeOpacity={1}>
              <Text style={{ flex: 1, lineHeight: 20, letterSpacing: 1, textAlign: 'center', color: '#fff', fontSize: 11 }}>关注</Text>
              {/* <View style={{ width: 2, height: 12, backgroundColor: '#fff', position: 'absolute', top: '50%', right: '50%', marginTop: -6, marginRight: -1 }}></View>
              <View style={{ width: 12, height: 2, backgroundColor: '#fff', position: 'absolute', top: '50%', right: '50%', marginRight: -6, marginTop: -1 }}></View> */}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 15,}}>
          <Text style={{ lineHeight: 20 }}>
            <TipicTag tag="话题一" />
            <TipicTag tag="话题二" />
            关关雎鸠，在河之洲。
            窈窕淑女，君子好逑。
            参差荇菜，左右流之。
            "关关雎鸠，在河之洲。
            窈窕淑女，君子好逑。
            参差荇菜，左右流之。"
            窈窕淑女，寤寐求之。{"\n"}
            求之不得，寤寐思服。
            <TipicTag tag="话题三" />
            悠哉悠哉，辗转反侧。
            参差荇菜，左右采之。
            窈窕淑女，琴瑟友之。
            参差荇菜，左右芼之。
            <TipicTag tag="话题四" />
            窈窕淑女，钟鼓乐之。
            </Text>
          <View style={{ marginTop: 15 }}>
            <View style={{ width: '100%', height: 300, backgroundColor: '#ddd' }}></View>
          </View>
          <View style={{ marginTop: 15 }}>
              <CommentItem/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  articleInfo: {
    paddingHorizontal: 15,
    height: 50,
    width: "100%",
    // backgroundColor:"#ddd",
    flexDirection: "row",
    alignItems: "center",
    // flex:1,
  },
  headerImg: {
    height: 50,
    // backgroundColor:"#ddd",
    alignItems: "center",
    flexDirection: "row",
  },
})