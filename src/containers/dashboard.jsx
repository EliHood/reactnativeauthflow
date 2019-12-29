import { connect } from "react-redux";
import DashboardView from "../components/screens/Dashboard";
import { getPostsInit } from "../actions/post/postActions";
const mapDispatchToProps = dispatch => ({
  getPostsInit: () => dispatch(getPostsInit())
});
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardView);
