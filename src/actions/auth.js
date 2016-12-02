import * as Constant from '../constants';
import {loginRequest} from '../services/auth';

export const loginSuccess = (token) => ({
    type: Constant.LOGIN_SUCCESS,
    message: 'SUCCESS',
    token
});

export const loginFailure = (message) => ({
  type: Constant.LOGIN_FAILURE,
  token: undefined,
  message
});

export const loginStateChange = (username, password) => ({
  type: Constant.LOGIN_FORM_STATE,
  form: {username, password}
})

export const login = (username, password) => {
  return function (dispatch) {
    loginRequest(username,password).then(response => {
      dispatch(loginSuccess(response.data.token));
    }).catch(error => {
      console.error('failed to login', error);
      dispatch(loginFailure('Failed to login'));
    });
  };
};

export const logout = () => ({
  type: Constant.LOGOUT,
  token: undefined
});
