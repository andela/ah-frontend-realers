import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_START } from '../types';

export const API_BASE_URL = 'https://ah-backend-realers-staging.herokuapp.com/api/profiles';

const userToken = localStorage.getItem('user_token');
const userName = localStorage.getItem('username');
export const requestOptions = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  },
};

const getUserProfile = () => (dispatch) => {
  const API_URL = `${API_BASE_URL}/${userName}/`;
  dispatch({ type: GET_PROFILE_START });
  return fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then((res) => {
      const { profile } = res;
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: profile,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PROFILE_FAILURE,
        errors: error,
      });
    });
};

export default getUserProfile;
