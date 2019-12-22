import {connect} from 'react-redux';
import {signOutInit} from '../actions/auth/authActions';
import SettingsView from '../components/screens/Settings';
const mapDispatchToProps = dispatch => ({
  signOutInit: navigation => dispatch(signOutInit(navigation)),
});
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
