import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

class HomeView extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Home </Text>
      </View>
    );
  }
}
export default HomeView;
