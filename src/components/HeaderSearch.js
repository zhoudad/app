import React, { Component } from 'react';
import { View, Text ,Dimensions, TouchableHighlight ,StyleSheet} from 'react-native';
import SvgIcon from '../SvgIcon'
const screenWidth = Dimensions.get('window').width

export default class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>

        <TouchableHighlight style={{height:40,width:340}}>
            <View style={{height:40,width:340,borderRadius:22,backgroundColor:'#ccc'}}></View>
        </TouchableHighlight>
        <SvgIcon name='weixin-1' size={18}></SvgIcon>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    header:{
        height:45,
        width:screenWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems: 'center',
    }
})
