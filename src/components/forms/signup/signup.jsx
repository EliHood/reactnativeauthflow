import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Subheading, HelperText } from "react-native-paper";
const SignUpForm = props => (
  <View style={styles.container}>
    <HelperText style={styles.helpText} type="error" visible={props.emailError}>
      {props.emailError}
    </HelperText>
    <TextInput
      style={styles.textField}
      name="email"
      mode="outlined"
      label="Enter Email"
      value={props.email}
      error={
        props.emailError === true || props.emailError === "" ? false : true
      }
      autoCapitalize="none"
      onChangeText={props.emailChange}
    />
    <HelperText type="error" visible={props.passwordError}>
      {props.passwordError}
    </HelperText>
    <TextInput
      style={styles.textField}
      name="password"
      secureTextEntry
      mode="outlined"
      label="Enter Password"
      value={props.password}
      error={
        props.passwordError === true || props.passwordError === ""
          ? false
          : true
      }
      autoCapitalize="none"
      onChangeText={props.passwordChange}
    />
    <Button
      disabled={props.disButton}
      style={styles.buttonCol}
      mode="contained"
      onPress={props.onSubmit}
    >
      Submit
    </Button>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  helpText: {
    padding: 0
  },
  textField: {
    marginTop: 5,
    borderTopColor: "#000"
  },
  buttonCol: {
    marginTop: 20
  }
});

export default SignUpForm;
