import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Subheading, Dialog } from "react-native-paper";
import ContentForm from "../forms/createPost/createContent";

export default class ContentView extends Component {
  state = {
    content: "",
    touched: {
      content: false
    }
  };
  validate = field => {
    console.log("tet", field);
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
    console.log(this.state.touched);
  };
  contentChange = content => {
    this.setState({ content });
  };
  onSubmit = () => {
    console.log(this.state);
    const { content } = this.state;
    const title = this.props.post.title;
    const formData = {
      title,
      content
    };
    console.log(formData);
    this.props.createPost(formData);
  };

  render() {
    // console.log(this.props);
    return (
      <Fragment>
        <Subheading style={styles.labels}> Add Content </Subheading>
        <ContentForm
          content={this.state.content}
          contentChange={this.contentChange}
          hasError={this.state.touched}
          onSubmit={this.onSubmit}
          validateContent={() => this.validate("content")}
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
