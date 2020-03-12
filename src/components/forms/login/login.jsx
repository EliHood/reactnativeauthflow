import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput, Button } from "react-native-paper";
import { Subheading } from "react-native-paper";
const LoginForm = props => (
  <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={false}
  >
    <View>
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
      <Button
        style={styles.buttonCol}
        mode="contained"
        onPress={props.onSubmit}
      >
        Submit
      </Button>
    </View>
  </KeyboardAwareScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  labels: {
    paddingBottom: 10
  },
  textField: {
    marginBottom: 20,
    borderTopColor: "#000"
  },
  buttonCol: {}
});

export default LoginForm;
