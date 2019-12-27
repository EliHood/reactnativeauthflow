import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Subheading, Dialog } from "react-native-paper";
import { withNavigation } from "react-navigation";
import PostForm from "../forms/createPost/createPost";
class AddTitleView extends Component {
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
    this.props.addTitle(title);
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

  render() {
    const isEnabled = this.state.title.length > 6 ? false : true;
    return (
      <Fragment>
        <Subheading style={styles.labels}> Add An Entry</Subheading>
        <PostForm
          title={this.state.title}
          titleChange={this.titleChange}
          disButton={isEnabled}
          hasError={this.state.touched}
          onSubmit={() => this.props.navigation.navigate("Content")}
          validateTitle={() => this.validate("title")}
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

export default AddTitleView;
