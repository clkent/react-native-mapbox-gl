import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HereScreen extends Component {
  static navigationOptions = {
    title: 'Mapbox Demo',
  };

  render() {
    return (
      <View>
        <Text>Mapbox demo goes here</Text>
      </View>
    );
  }
}

export default HereScreen;
