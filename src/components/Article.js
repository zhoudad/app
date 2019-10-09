import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import SvgIcon from '../SvgIcon'
import { withNavigation } from 'react-navigation';
import TipicTag from '../components/TipicTag'
var { height, width } = Dimensions.get('window');

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artArr: [1, 2, 3, 4, 5, 6]
    };
  }
    ToDetails = () => {
    const {navigation} = this.props
    navigation.navigate('ArticleDetails')
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.article}>
        <View style={styles.articleInfo}>
          <View style={styles.headerImg}>
            <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: "#51e0ce" }}></View>
          </View>
          <View style={{ marginLeft: 10, flex: 1, height: 50,justifyContent:'center' }}>
            <Text style={{ fontSize: 13, lineHeight: 16, color: "#333",marginTop:11 }}>周大大</Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ fontSize: 12, lineHeight: 25, color: "#aaa" }}>杭州</Text>
              <Text style={{ marginHorizontal: 6, lineHeight: 25 }}>.</Text>
              <Text style={{ fontSize: 12, lineHeight: 25, color: "#ccc" }}>一个小时前</Text>
            </View>
          </View>
          <View style={{ width: 35, alignItems: "center" }}>
            <SvgIcon name='weixin-1' size={12}></SvgIcon>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.ToDetails()}
          activeOpacity={1}
          style={styles.ArticleCont}>
          <Text numberOfLines={4} style={{ lineHeight: 18 }}>
            <TipicTag tag="话题一" />
            <TipicTag tag="话题二" />
            关关雎鸠，在河之洲。
            窈窕淑女，君子好逑。
            参差荇菜，左右流之。
            "关关雎鸠，在河之洲。
            窈窕淑女，君子好逑。
            参差荇菜，左右流之。"
            窈窕淑女，寤寐求之。
            求之不得，寤寐思服。
            <TipicTag tag="话题三" />
            悠哉悠哉，辗转反侧。
            参差荇菜，左右采之。
            窈窕淑女，琴瑟友之。
            参差荇菜，左右芼之。
            <TipicTag tag="话题四" />
            窈窕淑女，钟鼓乐之。
            </Text>
          <View
            style={this.state.artArr.length > 1 ? styles.ArticleContImgs : styles.ArticleContImg}
            ref="imgs"
          >
            {
              this.state.artArr.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{ width: (width / 3 - 15), height: (width / 3 - 15), backgroundColor: "#eee", marginTop: 8 }}></View>
                )
              })
            }
          </View>
        </TouchableOpacity>
        <View style={styles.ArticleFooter}>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
            <SvgIcon name='weixin-1' size={12}></SvgIcon>
            <Text style={{ marginHorizontal: 2 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <SvgIcon name='weixin-1' size={12}></SvgIcon>
            <Text style={{ marginHorizontal: 2 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
            <SvgIcon name='weixin-1' size={12}></SvgIcon>
            <Text style={{ marginHorizontal: 2 }}>1</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    // maxHeight: 500,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  articleInfo: {
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
  ArticleCont: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 350,
    // backgroundColor:"red"
    // flex:1
  },
  ArticleContImg: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "red",
  },
  ArticleContImgs: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  ArticleFooter: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center"
  }
})
export default withNavigation(Article)