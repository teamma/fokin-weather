import React from 'react';
import Loading from "./Loading";
import * as Loacation from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation;
  }
  render() {
    return <Loading />;
  }
}
