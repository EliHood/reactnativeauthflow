import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Subheading, Dialog } from "react-native-paper";
import { withNavigation } from "react-navigation";
import AddTitle from "../forms/createPost/addTitle";
class AddTitleView extends Component {
  state = {
    content: "",
    touched: {
      title: false,
      content: false
    }
  };
  titleChange = title => {
    this.props.addTitle(title); // pass to redux
  };

  render() {
    const { title, error } = this.props.post;
    const isEnabled = error === true ? false : true;

    return (
      <Fragment>
        <Subheading style={styles.labels}> Add A Thought</Subheading>
        <AddTitle
          title={title}
          titleChange={this.titleChange}
          disButton={isEnabled}
          hasError={error}
          onSubmit={() => this.props.navigation.navigate("Content")}
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
