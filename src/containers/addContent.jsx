import { connect } from "react-redux";
import ContentView from "../components/screens/AddContent";
import { createPost } from "../actions/post/postActions";
const mapDispatchToProps = dispatch => ({
  createPost: (postData, history) => dispatch(createPost(postData, history))
});
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView);
