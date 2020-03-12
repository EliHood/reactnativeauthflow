import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
export default function(WrappedComponent) {
  class IsLoading extends Component {
    state = {
      errors: {}
    };
    render() {
      return this.props.user.isLoading ? (
        <ActivityIndicator size={60} color="#333" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => ({
    user: state.user
  });
  return connect(mapStateToProps)(IsLoading);
}
