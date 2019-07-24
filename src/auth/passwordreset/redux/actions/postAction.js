import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_LOADING } from '../types';

export const API_URI = 'https://ah-backend-realers-staging.herokuapp.com/api/users/password-reset/';

const resetPasswordAction = (userdata, history) => dispatch => {
  dispatch({ type: RESET_PASSWORD_LOADING });
  return fetch(API_URI, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userdata),
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: res.user,
      });
      setTimeout(() => history.push('/reset'), 3000);
    })
    .catch(error => {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: error,
      });
    });
};

export default resetPasswordAction;
