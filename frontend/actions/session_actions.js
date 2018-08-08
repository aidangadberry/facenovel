import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
  ApiUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const logout = () => dispatch => (
  ApiUtil.logout().then(
    res => dispatch(logoutCurrentUser(res)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    errors => dispatch(receiveErrors(errors))
  )
);
