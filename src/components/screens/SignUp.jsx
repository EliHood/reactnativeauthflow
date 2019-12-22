import React, {Component, Fragment} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import SignUpForm from '../forms/signup/signup';
import {Subheading, Button} from 'react-native-paper';
import IsAuth from '../../hoc/isAuth';
class SignUpView extends Component {
  state = {
    email: '',
    password: '',
  };

  emailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  _register() {
    const {email, password} = this.state;
    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      this.props.signUpInit(formData);
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup');
  render() {
    const {email, password} = this.state;
    // console.log('dsds', this.props);
    return (
      <Fragment>
        <Subheading style={styles.labels}> Sign Up</Subheading>
        <SignUpForm
          email={email}
          password={password}
          emailChange={this.emailChange}
          passwordChange={this.handlePasswordChange}
          onSubmit={() => this._register()}
        />
        <View style={styles.container}>
          <Button
            style={styles.button}
            icon="arrow-right"
            compact={true}
            mode="outlined"
            onPress={() => this.props.navigation.navigate('Login')}>
            Login
          </Button>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  labels: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70,
  },
  button: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default IsAuth(SignUpView);
