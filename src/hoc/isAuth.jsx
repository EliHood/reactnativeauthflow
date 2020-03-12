import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
export default function(WrappedComponent) {
  class IsAuth extends Component {
    state = {
      errors: {},
      isLoading: true
    };
    componentDidMount() {
      if (this.props.user.isAuthenticated) {
        this.props.navigation.navigate("Home");
      }
    }
    //  this line is magic, redirects to the dashboard after user signs up
    // this replace getDerivedStateFromPropss
    static getDerivedStateFromProps(nextProps) {
      if (nextProps.user.isAuthenticated) {
        nextProps.navigation.navigate("Home");
        // console.log('is auth', nextProps.navigation);
        return { isLoading: false };
      }
      if (nextProps.errors) {
        return { errors: nextProps.errors };
      }
      return null;
    }
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
  return connect(mapStateToProps)(IsAuth);
}
