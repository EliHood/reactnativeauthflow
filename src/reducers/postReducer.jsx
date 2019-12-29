import produce from "immer";
import * as types from "../actionTypes/post/postTypes";
import { validateString } from "../utils/validation";
const initialState = {
  error: "",
  posts: [],
  title: "",
  content: ""
};

const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_POSTS_SUCCESS:
        console.log(action);
        draft.posts = action.data;
        break;
      case types.GET_POSTS_FAILURE:
        console.log(action);
        draft.error = action.error;
        break;
      case types.CREATE_POST_SUCCESS:
        console.log(action);
        draft.posts = [action.payload, ...draft.posts];
        draft.title = "";
        return;
      case types.CREATE_POST_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.ADD_TITLE:
        console.log(validateString(action.data));
        draft.title = action.data;
        draft.error = validateString(action.data);
        break;
    }
  });

export default postReducer;
