import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import LoginForm from '../forms/login/login';
import {Subheading} from 'react-native-paper';
import {Button} from 'react-native-paper';
import reduxSagaFirebase from '../../../firebaseConfig';

export default class SettingsView extends Component {
  state = {};
  logOut = () => {
    this.props.signOutInit(this.props.navigation);
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Settings </Text>
        <Button icon="logout" mode="contained" onPress={this.logOut}>
          Log-Out
        </Button>
      </View>
    );
  }
}
