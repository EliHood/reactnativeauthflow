import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SignUpView from './containers/signup';
import {createAppContainer} from 'react-navigation';
import LoginView from './components/screens/Login';
import Icon from 'react-native-vector-icons/AntDesign';

const AuthNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginView,
      navigationOptions: () => ({
        title: `Login to your account`,
        headerBackTitle: null,
        headerTitleStyle: {
          color: '#fff',
          padding: 20,
          margin: 0,
        },
        headerStyle: {
          backgroundColor: '#333',
        },
      }),
    },
    Signup: {
      screen: SignUpView,
      navigationOptions: () => ({
        title: `Welcome to this app`,
        headerBackTitle: null,
        headerTitleStyle: {
          color: '#fff',
          padding: 20,
          margin: 0,
        },
        headerStyle: {
          backgroundColor: '#333',
        },
      }),
    },
  },
  {
    initialRouteName: 'Signup',
  },
);
export default createAppContainer(AuthNavigation);
