import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

const PostForm = props => (
  <View style={styles.container}>
    <HelperText
      type="error"
      visible={props.hasError.title ? props.title.length < 6 : null}
    >
      Title must be at least 6 chars
    </HelperText>
    <TextInput
      style={styles.textField}
      name="title"
      mode="outlined"
      label="Enter Title"
      value={props.title}
      error={props.hasError.title ? props.title.length < 6 : null}
      autoCapitalize="none"
      onChangeText={props.titleChange}
      onFocus={props.validateTitle}
    />
    <HelperText
      type="error"
      visible={props.hasError.content ? props.content.length < 10 : null}
    >
      Content must be more than 10 chars
    </HelperText>
    <TextInput
      style={styles.textField}
      name="content"
      multiline={true}
      numberOfLines={4}
      mode="outlined"
      label="Enter content"
      value={props.content}
      error={props.hasError.content ? props.content.length < 10 : null}
      autoCapitalize="none"
      onChangeText={props.contentChange}
      onFocus={props.validateContent}
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

export default PostForm;
