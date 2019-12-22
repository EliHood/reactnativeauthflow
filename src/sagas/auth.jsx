import {
  call,
  fork,
  put,
  takeLatest,
  delay,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from '../actions/auth/authActions';
import * as types from '../actionTypes/auth/authTypes';
import api from '../api/api';
import reduxSagaFirebase from '../../firebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';
export function* registerUser(action) {
  try {
    const user = yield call(
      reduxSagaFirebase.auth.createUserWithEmailAndPassword,
      action.payload.email,
      action.payload.password,
    );
    setUser(user.user.providerData[0].uid);
    console.log(user.user.providerData[0].uid);

    yield put(actions.signUpSuccess(user));
  } catch (error) {
    yield put(actions.signUpFailure(error));
  }
}

export async function setUser(user) {
  try {
    await AsyncStorage.setItem('newUser', JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
}

async function removeUserStorage() {
  try {
    await AsyncStorage.removeItem('newUser').then(value => {
      const data = JSON.stringify(value);
      console.log('dssss', data);
    });
  } catch (e) {
    console.log(e);
  }
}

export function* currentUser() {
  try {
    const user = yield call(api.user.currentUser);
    console.log(user);

    yield put(actions.checkCurrentUserSuccess('success'));
  } catch (error) {
    yield put(actions.checkCurrentUserFailure(error));
  }
}
export function* signOut(action) {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    removeUserStorage();
    action.payload.navigate('Login');
    yield put(actions.signOutSuccess('Logged out'));
  } catch (error) {
    yield put(actions.signOutFailure(error));
  }
}
export function* watchUserRegister() {
  yield takeLatest(types.SIGNUP_INIT, registerUser);
}
export function* watchSignOut() {
  yield takeLatest(types.SIGNOUT_INIT, signOut);
}
export function* checkUser() {
  yield takeLatest(types.CHECK_CURRENT_USER, currentUser);
}
export default function*() {
  yield fork(watchUserRegister);
  yield fork(checkUser);
  yield fork(watchSignOut);
}
