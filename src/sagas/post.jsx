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
import AsyncStorage from "@react-native-community/async-storage";

export function* createPost(action) {
  try {
    const title = action.payload.title;
    const content = action.payload.content;
    yield call(reduxSagaFirebase.firestore.addDocument, "posts", {
      title: title,
      content: content,
      uid: fireAuth.currentUser.uid
    });
    yield put(actions.createPostSuccess(content));
  } catch (error) {
    alert(error.message);
    yield put(actions.createPostFailure(error));
  }
}
export function* watchCreatePost() {
  yield takeLatest(types.CREATE_POST_INIT, createPost);
}
export default function*() {
  yield fork(watchCreatePost);
}
