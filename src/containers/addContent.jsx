import { connect } from "react-redux";
import ContentView from "../components/screens/AddContent";
import { createPost, addContent } from "../actions/post/postActions";
const mapDispatchToProps = dispatch => ({
  addContent: content => dispatch(addContent(content)),
  createPost: (postData, history) => dispatch(createPost(postData, history))
});
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentView);
