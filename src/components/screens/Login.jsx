import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Button,
  TextInput
} from "react-native";
import LoginForm from "../forms/login/login";
import { Subheading, Dialog } from "react-native-paper";
import IsAuth from "../../hoc/isAuth";
class LoginView extends Component {
  state = {
    email: "",
    password: ""
  };

  emailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  onLogin = () => {
    const { email, password } = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        const formData = {
          email,
          password
        };
        this.props.signInInit(formData);
      }
    } catch (error) {
      alert(error);
    }
  };

  // goToSignup = () => this.props.navigation.navigate('Signup');
  render() {
    const { email, password } = this.state;
    // console.log(this.props.user)
    return (
      <Fragment>
        <Subheading style={styles.labels}>Log In</Subheading>
        <LoginForm
          email={email}
          password={password}
          emailChange={this.emailChange}
          passwordChange={this.handlePasswordChange}
          onSubmit={this.onLogin}
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
    padding: 10,
    marginTop: 20
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70
  },
  button: {
    borderColor: "#000",
    borderWidth: 1
  }
});
export default IsAuth(LoginView);
