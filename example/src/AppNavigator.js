import {createStackNavigator} from 'react-navigation';

import HomeScreen from './Home';
import MapboxScreen from './Mapbox';
import HereScreen from './Here';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Mapbox: MapboxScreen,
    Here: HereScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
