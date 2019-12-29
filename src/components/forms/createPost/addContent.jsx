import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

const AddContentForm = props => (
  <View style={styles.container}>
    <HelperText type="error" visible={props.hasError}>
      {props.hasError}
    </HelperText>
    <TextInput
      style={styles.textField}
      name="content"
      multiline={true}
      numberOfLines={4}
      mode="outlined"
      label="Enter content"
      value={props.content}
      error={props.hasError === true || props.hasError === "" ? false : true}
      autoCapitalize="none"
      onChangeText={props.contentChange}
    />
    <Button
      disabled={props.disButton}
      style={styles.postbtn}
      mode="outlined"
      onPress={props.onSubmit}
    >
      Submit
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: -30
  },
  textField: {
    marginBottom: 5,
    borderTopColor: "#000"
  },
  postbtn: {
    marginTop: 20
  }
});

export default AddContentForm;
