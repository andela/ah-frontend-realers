import { SIGNUP_USER_SUCCESS, SIGNUP_USER_START, SIGNUP_USER_FAILURE } from '../types';
import helper from '../../helper';

export const API_URI = 'https://ah-backend-realers-staging.herokuapp.com/api/users/';

const signUpUser = postData => (dispatch) => {
  dispatch({ type: SIGNUP_USER_START });
  fetch(API_URI, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then((post) => {
      helper(post);
      dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: post,
      });
    })
    .catch(error => (dispatch({ type: SIGNUP_USER_FAILURE, errors: error })));
};

export default signUpUser;
