import React from 'react';
import { View, Text, StyleSheet, Image, PermissionsAndroid, Platform ,ToastAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default class GeolocationCom extends React.Component {
  state = {
    currentLongitude: 'unknown',
    currentLatitude: 'unknown',
    key: 'd6225bb8abda80a26f2bc3a130d3137a',
    province: 'unknown',
    district: 'unknown'
  }
  componentDidMount = () => {
    var that = this;
    if (Platform.OS === 'ios') {
      that.getPositions();
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // that.callLocation(that);
            that.getPositions();
          } else {
            alert("Permission Denied");
          }
        } catch (err) {
          alert("err", err);
          // console.warn(err)
        }
      }
      requestLocationPermission();
    }
  }
  callLocation(that) {
    //alert("callLocation Called");
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        // that.setState({ currentLongitude: currentLongitude });
        //Setting state Longitude to re re-render the Longitude Text
        // that.setState({ currentLatitude: currentLatitude });
        //Setting state Latitude to re re-render the Longitude Text
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    // that.watchID = Geolocation.watchPosition((position) => {
    //   //Will give you the location on location change
    //   console.log(position);
    //   const currentLongitude = JSON.stringify(position.coords.longitude);
    //   //getting the Longitude from the location json
    //   const currentLatitude = JSON.stringify(position.coords.latitude);
    //   //getting the Latitude from the location json
    //   that.setState({ currentLongitude: currentLongitude });
    //   //Setting state Longitude to re re-render the Longitude Text
    //   that.setState({ currentLatitude: currentLatitude });
    //   //Setting state Latitude to re re-render the Longitude Text
    // });
  }
  // componentWillUnmount = () => {
  //   Geolocation.clearWatch(this.watchID);
  // }


  getPositions = () => {
    //获取位置再得到城市先后顺序，通过Promise完成
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        location => {
          this.setState({
            currentLongitude: location.coords.longitude,//经度
            currentLatitude: location.coords.latitude,//纬度
          });
          fetch(`https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${this.state.currentLongitude},${this.state.currentLatitude}&coordsys=gps&output=json&key=${this.state.key}`, { method: "GET" })
            .then(response => response.json())
            .then((jsonDa) => {
              let newVar = jsonDa.locations.split(',')
              try {
                this.setState({
                  currentLongitude: newVar[0],//经度
                  currentLatitude: newVar[1],//纬度
                });
              } catch (error) {
                return
              }
              //访问网络开始
              fetch('http://restapi.amap.com/v3/geocode/regeo?key=' + this.state.key + '&location=' + this.state.currentLongitude + ',' + this.state.currentLatitude + '&radius=1000&extensions=all&batch=false&roadlevel=0', {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: ``
              })
                .then((response) => response.json())
                .then((jsonData) => {
                  try {
                    //Toast.show(jsonData.result.formatted_address+jsonData.result.sematic_description)
                    this.setState({
                      province: jsonData.regeocode.addressComponent.province,
                      city: jsonData.regeocode.addressComponent.city,
                      district: jsonData.regeocode.addressComponent.district,
                    });
                  } catch (e) {

                  }
                })
                .catch((error) => {
                  console.error(error);
                });
              //访问网络结束
            })
            .catch(error => {
              reject(error);
            });
        },
        error => {
          reject(error);
          if (error.code == 2) {
            ToastAndroid.show('定位失败，请查看手机是否开启GPS定位服务', ToastAndroid.SHORT);
          } else if (error.code == 3) {
            ToastAndroid.show("定位超时，请尝试重新获取定位", ToastAndroid.SHORT);
          } else {
            ToastAndroid.show("定位失败：" + error.message, ToastAndroid.SHORT);
          }
        }, {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 10000
        }
      );

    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://png.icons8.com/dusk/100/000000/compass.png' }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.boldText}>
          You are Here
          </Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          Longitude: {this.state.currentLongitude}
        </Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          Latitude: {this.state.currentLatitude}
        </Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          province: {this.state.province}
        </Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          city: {this.state.city}
        </Text>
        <Text style={{ justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
          district: {this.state.district}
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
    backgroundColor: 'white'
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  }
})