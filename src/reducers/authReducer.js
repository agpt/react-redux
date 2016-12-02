import * as Constant from '../constants';
const initialAuthState = {
  token: undefined,
  message: '',
  form: {
    username: '',
    password: ''
  }
}


export const login = function login(state = initialAuthState, action) {
  switch (action.type) {
    case Constant.LOGIN_SUCCESS:
      return Object.assign({}, state, {token: action.token, message: action.message});
    case Constant.LOGIN_FAILURE:
      return Object.assign({}, state, {message: action.message});
    case Constant.LOGOUT:
      return Object.assign({}, state, {token: undefined});
    case Constant.LOGIN_FORM_STATE:
      return Object.assign({}, state, {form: action.form});
    default:
      return state;
  }
};
