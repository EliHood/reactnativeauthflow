import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      loggedIn: false,
      isLoading: true,
    };
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    console.log('this got called');
    AsyncStorage.getItem('newUser').then(token => {
      this.setState({
        loggedIn: token === null ? false : true,
        isLoading: false,
      });
      console.log('tokeddn', this.state.loggedIn);
      this.props.navigation.navigate(this.state.loggedIn ? 'App' : 'Auth');
    });
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={60} color="#333" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});