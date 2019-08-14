// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       entries: [
//         { title: 'hello' },
//         { title: 'world' },
//         { title: 'world' },
//         { title: 'world' },
//         { title: 'world' },
//         { title: 'world' },
//       ]
//     }
//   }
//   _renderItem({ item, index }) {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     );
//   }
//   render() {
//     return (
//       <Carousel
//         layout={'tinder'}
//         layoutCardOffset={`9`}
//         ref={(c) => { this._carousel = c; }}
//         data={this.state.entries}
//         renderItem={this._renderItem}
//         sliderWidth={Dimensions.get('window').width}
//         itemWidth={Dimensions.get('window').width}
//       />
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ddd',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     backgroundColor: '#ddd',
//     height: Dimensions.get('window').height,
//     lineHeight: Dimensions.get('window').height,
//     fontSize: 30,
//     textAlign: 'center'
//   }
// });






import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      entries: [
        { title: 'hello' },
        { title: 'world' },
        { title: 'world' },
        { title: 'world' },
        { title: 'world' },
        { title: 'world' },
      ]
    }
  }
    render(){
      return (
        <Swiper style={styles.wrapper}>
          {
            this.state.entries.map((item,index) => {
              return (
                <View style={styles.slide1}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              )
            })
          }
          {/* <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View> */}
        </Swiper>
      );
    }
  }

  const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })