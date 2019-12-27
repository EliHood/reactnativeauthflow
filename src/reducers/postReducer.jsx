import produce from "immer";
import * as types from "../actionTypes/post/postTypes";

const initialState = {
  error: "",
  posts: [],
  title: "",
  content: ""
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.CREATE_POST_SUCCESS:
        console.log(action);
        // draft.posts = [action.payload.post, ...draft.posts];
        return;
      case types.CREATE_POST_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.ADD_TITLE:
        draft.title = action.data;
        break;
    }
  });

export default postReducer;
