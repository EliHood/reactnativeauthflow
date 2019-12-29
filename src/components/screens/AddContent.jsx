import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Subheading, Dialog } from "react-native-paper";
import AddContentForm from "../forms/createPost/addContent";

export default class ContentView extends Component {
  state = {
    touched: {
      content: false
    }
  };
  contentChange = content => {
    this.props.addContent(content); // pass to redux
  };
  onSubmit = () => {
    // console.log(this.state);
    const { content, title } = this.props.post;
    const formData = {
      title,
      content
    };
    // console.log(formData);
    this.props.createPost(formData, this.props.navigation);
  };

  render() {
    const { content, error } = this.props.post;
    const isEnabled = error === true ? false : true;
    return (
      <Fragment>
        <Subheading style={styles.labels}> Add Content </Subheading>
        <AddContentForm
          content={content}
          contentChange={this.contentChange}
          hasError={error}
          onSubmit={this.onSubmit}
          disButton={isEnabled}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  labels: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    padding: 20,
    marginTop: 50
  }
});
