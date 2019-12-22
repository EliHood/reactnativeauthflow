import React from 'react';
import HomeView from './components/screens/Home';
import SettingsView from './containers/settings';
import Icon from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import DashboardView from './components/screens/Dashboard';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      },
    },

    Dashboard: {
      screen: DashboardView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="dashboard" color={tintColor} size={24} />
        ),
      },
    },
    Settings: {
      screen: SettingsView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={24} />
        ),
      },
    },
  },

  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {
      backgroundColor: '#694fad',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
);

export default createAppContainer(AppNavigator);
