import {
  call,
  fork,
  put,
  takeLatest,
  delay,
  takeEvery
} from "redux-saga/effects";
import * as actions from "../actions/post/postActions";
import * as types from "../actionTypes/post/postTypes";
import { reduxSagaFirebase, fireAuth } from "../../firebaseConfig";
export function* createPost(action) {
  try {
    const title = action.payload.title;
    const content = action.payload.content;

    yield call(reduxSagaFirebase.firestore.addDocument, "posts", {
      title: title,
      content: content,
      uid: fireAuth.currentUser.uid
    });
    const formData = {
      title,
      content
    };
    yield put(actions.createPostSuccess(formData));
    action.history.navigate("Dashboard");
  } catch (error) {
    alert(error.message);
    yield put(actions.createPostFailure(error));
  }
}

export function* getPosts() {
  try {
    const snapshot = yield call(
      reduxSagaFirebase.firestore.getCollection,
      "posts"
    );
    let posts = [];
    console.log(snapshot);
    snapshot.forEach(post => {
      posts.push(post.data());
    });

    // console.log(snapshot);
    console.log(posts);
    yield put(actions.getPostsSuccess(posts));
  } catch (error) {
    yield put(actions.getPostsFailure(error));
  }
}

export function* watchGetPosts() {
  yield takeLatest(types.INIT_GET_POSTS, getPosts);
}
export function* watchCreatePost() {
  yield takeLatest(types.CREATE_POST_INIT, createPost);
}
export default function*() {
  yield fork(watchCreatePost);
  yield fork(watchGetPosts);
}
