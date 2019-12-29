import * as types from "../../actionTypes/postTypes";

export const createPost = (payload, history) => ({
  type: types.CREATE_POST_INIT,
  payload,
  history
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

export const addContent = data => ({
  type: types.ADD_CONTENT,
  data
});

export const getPostsInit = () => ({
  type: types.INIT_GET_POSTS
});

export const getPostsSuccess = data => ({
  type: types.GET_POSTS_SUCCESS,
  data
});

export const getPostsFailure = error => ({
  type: types.GET_POSTS_FAILURE,
  error
});
