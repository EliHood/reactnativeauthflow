import { connect } from "react-redux";
import LoginView from "../components/screens/Login";
import { signInInit } from "../actions/auth/authActions";
const mapDispatchToProps = dispatch => ({
  signInInit: userData => dispatch(signInInit(userData))
});
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);
