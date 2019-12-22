import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Subheading} from 'react-native-paper';
const SignUpForm = props => (
  <View style={styles.container}>
    <TextInput
      style={styles.textField}
      name="email"
      mode="outlined"
      label="Enter Email"
      value={props.email}
      autoCapitalize="none"
      onChangeText={props.emailChange}
    />
    <TextInput
      style={styles.textField}
      name="email"
      mode="outlined"
      secureTextEntry
      label="Enter Password"
      value={props.password}
      autoCapitalize="none"
      onChangeText={props.passwordChange}
    />
    <Button style={styles.buttonCol} mode="contained" onPress={props.onSubmit}>
      Submit
    </Button>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  labels: {
    paddingBottom: 10,
  },
  textField: {
    marginBottom: 20,
    borderTopColor: '#000',
  },
  buttonCol: {},
});

export default SignUpForm;
