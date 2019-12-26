import {
  call,
  fork,
  put,
  takeLatest,
  delay,
  takeEvery
} from "redux-saga/effects";
import * as actions from "../actions/auth/authActions";
import * as types from "../actionTypes/auth/authTypes";
import { reduxSagaFirebase, fireAuth } from "../../firebaseConfig";
import AsyncStorage from "@react-native-community/async-storage";
export function* registerUser(action) {
  try {
    const user = yield call(
      reduxSagaFirebase.auth.createUserWithEmailAndPassword,
      action.payload.email,
      action.payload.password
    );
    setUser(user.user.providerData[0].uid);
    console.log(user.user.providerData[0]);
    // add to user collection
    yield call(reduxSagaFirebase.firestore.addDocument, "users", {
      email: action.payload.email,
      password: action.payload.password,
      uid: user.user.providerData[0].uid
    });

    yield put(actions.signUpSuccess(user));
  } catch (error) {
    alert(error.message);
    yield put(actions.signUpFailure(error));
  }
}

export async function setUser(user) {
  try {
    await AsyncStorage.setItem("newUser", JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
}

async function removeUserStorage() {
  try {
    await AsyncStorage.removeItem("newUser").then(value => {
      const data = JSON.stringify(value);
      return data;
    });
  } catch (e) {
    console.log(e);
  }
}

export function* signIn(action) {
  try {
    console.log("sdff", action);

    const userCredentials = yield call(
      reduxSagaFirebase.auth.signInWithEmailAndPassword,
      action.payload.email,
      action.payload.password,
    );
    // console.log("testgng aut", fireAuth.currentUser);
    // this sets the uid to storage, so react native will know that the user is still signed in
    setUser(userCredentials.user.providerData[0].uid);
    yield put(actions.signInSuccess(userCredentials));
  } catch (e) {
    alert(e.message);
    yield put(actions.signInFailure(e.message));
  }
}

export function* signOut(action) {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    removeUserStorage();
    action.payload.navigate("Login");
    yield put(actions.signOutSuccess("Logged out"));
  } catch (error) {
    yield put(actions.signOutFailure(error));
  }
}
export function* watchSignIn() {
  yield takeLatest(types.SIGNIN_INIT, signIn);
}
export function* watchUserRegister() {
  yield takeLatest(types.SIGNUP_INIT, registerUser);
}
export function* watchSignOut() {
  yield takeLatest(types.SIGNOUT_INIT, signOut);
}
export default function*() {
  yield fork(watchUserRegister);
  yield fork(watchSignOut);
  yield fork(watchSignIn);
}
