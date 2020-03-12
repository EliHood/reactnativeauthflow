import produce from "immer";
import { REHYDRATE } from "redux-persist";
import * as types from "../actionTypes/postTypes";
import { validateString, validateContent } from "../utils/validation";
const initialState = {
  error: "",
  posts: [],
  title: "",
  content: "",
  isLoading: false
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
        draft.content = "";
        return;
      case types.CREATE_POST_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.ADD_TITLE:
        console.log(validateString(action.data));
        draft.title = action.data;
        draft.error = validateString(action.data);
        draft.isLoading = true;
        break;
      case types.ADD_CONTENT:
        console.log(validateContent(action.data));
        draft.content = action.data;
        draft.error = validateContent(action.data);
        break;
    }
  });

export default postReducer;
