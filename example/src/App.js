import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';

import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
