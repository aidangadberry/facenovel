import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUserByUrl = userUrl => dispatch => (
  ApiUtil.findUserByUrl(userUrl).then(
    res => dispatch(receiveUser(res))
  )
);
