import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(WrappedComponent) {
  class IsAuth extends Component {
    state = {
      errors: {},
    };
    componentDidMount() {
      if (this.props.user.isAuthenticated) {
        this.props.navigation.navigate('Home');
      }
    }
    //  this line is magic, redirects to the dashboard after user signs up
    // this replace getDerivedStateFromPropss
    static getDerivedStateFromProps(nextProps) {
      if (nextProps.user.isAuthenticated) {
        nextProps.navigation.navigate('Home');
        console.log('is auth', nextProps.navigation);
      }
      if (nextProps.errors) {
        return {errors: nextProps.errors};
      }
      return null;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    user: state.user,
  });
  return connect(mapStateToProps)(IsAuth);
}
