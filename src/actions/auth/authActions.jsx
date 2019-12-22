import * as types from '../../actionTypes/auth/authTypes';
export const signUpInit = payload => ({
  type: types.SIGNUP_INIT,
  payload,
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signUpFailure = error => ({
  type: types.SIGNUP_FAILURE,
  error,
});

export const signInInit = payload => ({
  type: types.SIGNIN_INIT,
  payload,
});

export const signInSuccess = payload => ({
  type: types.SIGNIN_SUCCESS,
  payload,
});

export const signInFailure = error => ({
  type: types.SIGNIN_FAILURE,
  error,
});

export const checkCurrentUser = () => ({
  type: types.CHECK_CURRENT_USER,
});

export const checkCurrentUserSuccess = payload => ({
  type: types.CHECK_CURRENT_USER_SUCCESS,
  payload,
});

export const checkCurrentUserFailure = error => ({
  type: types.CHECK_CURRENT_USER_FAILURE,
  error,
});

export const signOutInit = payload => ({
  type: types.SIGNOUT_INIT,
  payload,
});

export const signOutSuccess = payload => ({
  type: types.SIGNOUT_SUCCESS,
  payload,
});

export const signOutFailure = error => ({
  type: types.SIGNOUT_FAILURE,
  error,
});
