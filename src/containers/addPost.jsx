import { connect } from "react-redux";
import AddPostView from "../components/screens/AddPost";
import { createPost } from "../actions/post/postActions";
const mapDispatchToProps = dispatch => ({
  createPost: postData => dispatch(createPost(postData))
});
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostView);
