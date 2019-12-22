import produce from 'immer';
import * as types from '../actionTypes/auth/authTypes';
import {checkUser} from '../utils';
const initialState = {
  isAuthenticated: false,
  error: '',
  currentUser: false,
  isLoading: false,
  message: '',
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SIGNUP_SUCCESS:
        console.log(action);
        draft.isAuthenticated = true;
        return;
      case types.SIGNUP_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.SIGNOUT_SUCCESS:
        console.log(action);
        draft.isAuthenticated = false;
        return;
      case types.SIGNOUT_FAILURE:
        console.log(action);
        draft.isAuthenticated = false;
        return;
      case types.SIGNIN_SUCCESS:
        console.log(action)
        draft.isAuthenticated = true
        return;
      case types.SIGNIN_FAILURE:
        console.log(action);
        draft.error = action.error
        return
      case types.CHECK_CURRENT_USER_SUCCESS:
        console.log(action);
        draft.isAuthenticated = true;
        return;
      case types.CHECK_CURRENT_USER_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
    }
  });

export default authReducer;
