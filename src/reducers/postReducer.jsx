import produce from "immer";
import * as types from "../actionTypes/post/postTypes";

const initialState = {
  error: "",
  posts: []
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
    }
  });

export default postReducer;
