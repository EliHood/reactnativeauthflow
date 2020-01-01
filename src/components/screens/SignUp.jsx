import React, { Component, Fragment } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SignUpForm from "../forms/signup/signup";
import { Subheading, Button } from "react-native-paper";
import IsAuth from "../../hoc/isAuth";
class SignUpView extends Component {
  emailChange = email => {
    this.props.addEmail(email);
  };

  handlePasswordChange = password => {
    this.props.addPassword(password);
  };

  _register() {
    const { email, password } = this.props.user;
    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password
      };
      this.props.signUpInit(formData);
    }
  }

  render() {
    const { email, password, emailError, passwordError } = this.props.user;
    const isEnabled =
      emailError === true && passwordError === true ? false : true;
    console.log("dsds", this.props.user);
    return (
      <Fragment>
        <Subheading style={styles.labels}> Sign Up</Subheading>
        <SignUpForm
          email={email}
          emailError={emailError}
          passwordError={passwordError}
          password={password}
          disButton={isEnabled}
          emailChange={this.emailChange}
          passwordChange={this.handlePasswordChange}
          onSubmit={() => this._register()}
        />
        <View style={styles.logIn}>
          <Button
            style={styles.button}
            icon="arrow-right"
            compact={true}
            mode="outlined"
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Login
          </Button>
        </View>
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
  logIn: {
    marginTop: 130,
    flex: 1,
    padding: 20
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

export default IsAuth(SignUpView);
