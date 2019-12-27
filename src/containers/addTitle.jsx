import { connect } from "react-redux";
import AddTitleView from "../components/screens/AddTitleView";
import { addTitle } from "../actions/post/postActions";
const mapDispatchToProps = dispatch => ({
  addTitle: title => dispatch(addTitle(title))
});
const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTitleView);
