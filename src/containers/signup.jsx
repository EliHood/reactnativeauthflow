import { connect } from "react-redux";
import SignUpView from "../components/screens/SignUp";
import { signUpInit } from "../actions/auth/authActions";
const mapDispatchToProps = dispatch => ({
  signUpInit: userData => dispatch(signUpInit(userData))
});
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpView);
