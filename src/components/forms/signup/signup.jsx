import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Subheading, HelperText } from "react-native-paper";
const SignUpForm = props => (
  <View style={styles.container}>
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
    <HelperText style={styles.helpText} type="error" visible={props.emailError}>
      {props.emailError}
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
    <HelperText type="error" visible={props.passwordError}>
      {props.passwordError}
    </HelperText>
    <View style={{ alignItems: "center" }}>
      <Button
        raised
        disabled={props.disButton}
        style={styles.buttonCol}
        compact={true}
        onPress={props.onSubmit}
      >
        Submit
      </Button>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  helpText: {
    padding: 0,
    margin: 0
  },
  textField: {
    borderTopColor: "transparent",
    borderLeftColor: "green"
  },
  buttonCol: {
    marginTop: 20,
    width: 200,
    borderRadius: 3
  }
});

export default SignUpForm;
