import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
var REQUEST_URL =
  "https://www.easy-mock.com/mock/5d2d1f6d6679d37b6cba98cb/example/upload";
export default class IMScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  // componentDidMount() {
  //   this.fetchData();
  // }
  fetchData() {
    let formdata = new FormData
    formdata.append(`tel`,`1234567`)
    fetch(REQUEST_URL,{
      method:'POST',
      body:formdata
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          data: this.state.data.concat(responseData),
        });
      });
  }
  render() {
    return (
      <View>
        <Text> IMScreen </Text>
        <Button
            onPress={() => this.fetchData()}
            title="POST"
            color="#ccc"
        />
      </View>
    );
  }
}
