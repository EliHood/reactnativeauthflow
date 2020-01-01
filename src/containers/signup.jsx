import { connect } from "react-redux";
import SignUpView from "../components/screens/SignUp";
import { signUpInit, addEmail, addPassword } from "../actions/auth/authActions";
const mapDispatchToProps = dispatch => ({
  signUpInit: userData => dispatch(signUpInit(userData)),
  addEmail: email => dispatch(addEmail(email)),
  addPassword: password => dispatch(addPassword(password))
});
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpView);
