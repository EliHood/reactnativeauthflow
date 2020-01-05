import produce from "immer";
import * as types from "../actionTypes/authTypes";
import { validateEmail, validatePassword } from "../utils/validation";
const initialState = {
  isAuthenticated: false,
  emailError: "",
  passwordError: "",
  currentUser: false,
  isLoading: true,
  hasError: "",
  email: "",
  password: ""
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SIGNUP_SUCCESS:
        console.log(action);
        draft.isAuthenticated = true;
        draft.email = "";
        draft.password = "";
        draft.loading = false;
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
        draft.isAuthenticated = true;
        return;
      case types.SIGNIN_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.CHECK_CURRENT_USER_SUCCESS:
        console.log(action);
        draft.isAuthenticated = true;
        return;
      case types.CHECK_CURRENT_USER_FAILURE:
        console.log(action);
        draft.error = action.error;
        return;
      case types.ADD_EMAIL:
        console.log(action);
        draft.email = action.data;
        draft.emailError = validateEmail(action.data);
        return;
      case types.ADD_PASSWORD:
        console.log(action);
        draft.password = action.data;
        draft.passwordError = validatePassword(action.data);
        return;
    }
  });

export default authReducer;
