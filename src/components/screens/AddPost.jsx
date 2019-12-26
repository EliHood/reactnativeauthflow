import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Subheading, Dialog } from "react-native-paper";
import PostForm from "../forms/createPost/createPost";
export default class AddPostView extends Component {
  state = {
    title: "",
    content: "",
    touched: {
      title: false,
      content: false
    }
  };
  titleChange = title => {
    this.setState({ title });
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
    const { title, content } = this.state;
    const formData = {
      title,
      content
    };
    console.log(this.props);
    console.log(formData);
  };

  render() {
    const isEnabled =
      this.state.title.length < 6 || this.state.content.length < 10
        ? true
        : false;

    return (
      <Fragment>
        <Subheading style={styles.labels}> Add An Entry</Subheading>
        <PostForm
          title={this.state.title}
          titleChange={this.titleChange}
          content={this.state.content}
          contentChange={this.contentChange}
          disButton={isEnabled}
          hasError={this.state.touched}
          onSubmit={this.onSubmit}
          validateTitle={() => this.validate("title")}
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
