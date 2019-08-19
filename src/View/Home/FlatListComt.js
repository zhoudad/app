import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
const City = ['北京', '上海', '深圳', '武汉', '广州', '杭州', '重庆', '天津', '香港', '福建', '郑州', '四川',]

export default class FlatListComt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cityData: City
    };
  }

  Loading = (ref) => {
    if(ref) {
      this.setState({ isLoading: true })
    }
    setTimeout(() => {
      let newCityData = []
      if(ref) {
        for (let i = this.state.cityData.length - 1; i >= 0; i--) {
          newCityData.push(this.state.cityData[i])
        }
      }else{
        newCityData = this.state.cityData.concat(City)
      }
      this.setState({
        cityData: newCityData,
        isLoading: false,
      })
    }, 1500)
  }

  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.Text}>{data.item}</Text>
      </View>
    )
  }

  more = () => {
    return (
      <View style={{alignItems:'center'}}>
        <ActivityIndicator
          size={'large'}
          animating={true}
          style={{margin:10}}
          color={'green'}
        />
        <Text>正在加载更多</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.cityData}
          renderItem={(data) => this._renderItem(data)}
          refreshControl={
            <RefreshControl
              title={'loading'}
              colors={['green']}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.Loading(true)
              }}
            />
          }
          ListFooterComponent={() => this.more()}
          onEndReached={() => this.Loading()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',

  },
  item: {
    backgroundColor: '#169',
    height: 200,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    color: '#fff'
  }
})