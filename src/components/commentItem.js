import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SvgIcon from '../SvgIcon'

var { screenHeight, screenWidth } = Dimensions.get('window');
export default class commentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: 40 }}>
                    <View style={{ width: 26, height: 26, backgroundColor: '#ddd', borderRadius: 35 }}></View>
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text>周大大</Text>
                        <Text>窈窕淑女，君子好逑</Text>
                        <View style={{height:30,justifyContent:'space-between',marginTop:5,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{ fontSize: 12, color: "#ccc",marginRight:10 }}>一个小时前</Text>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',backgroundColor:'red',}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <SvgIcon name='weixin-1' size={13}></SvgIcon>
                                    <Text>1</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}> 
                                    <SvgIcon name='weixin-1' size={13}></SvgIcon>
                                    <Text>1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text>
                            <Text style={{ color: '#51e0ce' }}>周大大</Text>
                            回复
                            <Text style={{ color: '#51e0ce' }}>周小小</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

})