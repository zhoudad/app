import React, { Component } from 'react';
import { View, Text, TouchableOpacity,FlatList,RefreshControl,ActivityIndicator ,Dimensions,StyleSheet, ScrollView} from 'react-native';
import SvgIcon from '../../SvgIcon'
import Article from '../../components/Article'

var { screenHeight, screenWidth } = Dimensions.get('window');
export default class Recommend extends Component {
  // const {navigation} = this.props
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      ArticleList:[1,2,3,4,5,6,7,8,9]
    };
  }
  Loading = (ref) => {
    if(ref) {
      this.setState({ isLoading: true })
    }
    setTimeout(() => {
      // let newCityData = []
      // if(ref) {
      //   for (let i = this.state.cityData.length - 1; i >= 0; i--) {
      //     newCityData.push(this.state.cityData[i])
      //   }
      // }else{
      //   newCityData = this.state.cityData.concat(City)
      // }
      this.setState({
        // cityData: newCityData,
        isLoading: false,
      })
    }, 1500)
  }
  // ToDetails = () => {
  //   const {navigation} = this.props
  //   navigation.navigate('ArticleDetails')
  //   console.log(navigation)
  // }
  _renderItem = ({item}) => {
    const {navigation} = this.props
    return (
      <Article navigation={navigation}/>
    )
  };
  more = () => {
    return (
      <View style={{alignItems:'center'}}>
        <ActivityIndicator
          animating={true}
          style={{margin:10}}
          color={'#51e0ce'}
        />
        <Text>正在加载更多</Text>
      </View>
    )
  }
  render() {
    console.log( this.props.navigation)
    return (
      <View style={styles.recommend}>
        {/* <Text onPress={() => this.props.navigation.navigate('FlatListComt')}>1111</Text> */}
        <FlatList
          data={this.state.ArticleList}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={['#51e0ce']}
              refreshing={this.state.isLoading}//lond样式小圆圈
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
  recommend:{
    flex:1,
    backgroundColor:"#eee"
  }
})