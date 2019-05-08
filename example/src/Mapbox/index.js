import React, { Component } from 'react';
import { View } from 'react-native';

import Mapbox from './MapboxGl';

class HereScreen extends Component {
  static navigationOptions = {
    title: 'Mapbox GL Demo'
  };

  render() {
    return <Mapbox />;
  }
}

export default HereScreen;
