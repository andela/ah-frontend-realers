import { EDIT_PROFILE_START, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE } from '../types';
import validator from '../../Validation';

export const API_BASE_URL = 'https://ah-backend-realers-staging.herokuapp.com/api/profiles';
const userTokenn = localStorage.getItem('user_token');
const userNamE = localStorage.getItem('username');


const editProfile = (editData) => (dispatch) => {
  console.log(editData);
  const API_URL = `${API_BASE_URL}/${userNamE}/`;
  dispatch({ type: EDIT_PROFILE_START });
  fetch(API_URL, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${userTokenn}`,
    },
    body: JSON.stringify({ profile: editData }),
  })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      validator(res);
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: res,
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_PROFILE_FAILURE,
        errors: error,
      });
    });
};

export default editProfile;
