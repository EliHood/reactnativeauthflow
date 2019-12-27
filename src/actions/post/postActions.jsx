import * as types from "../../actionTypes/post/postTypes";

export const createPost = payload => ({
  type: types.CREATE_POST_INIT,
  payload
});

export const createPostSuccess = payload => ({
  type: types.CREATE_POST_SUCCESS,
  payload
});

export const createPostFailure = error => ({
  type: types.CREATE_POST_FAILURE,
  error
});

export const addTitle = data => ({
  type: types.ADD_TITLE,
  data
});
