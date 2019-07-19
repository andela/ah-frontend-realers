import axios from 'axios';
import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_LOADING } from '../types';

export const changePasswordAction = (userdata, props) => dispatch => {
  dispatch({ type: CHANGE_PASSWORD_LOADING });
  return axios.post('https://ah-backend-realers-staging.herokuapp.com/api/users/change-password/', userdata)
    .then(res => {
      toast.success('Success! Your password has been changed.', 'success', 5000);
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: res.data.user
      });
      setTimeout(()=> props.history.go('/change'), 3000)
    })
    .catch(error => {
      dispatch({
        type: CHANGE_PASSWORD_FAILURE,
        payload: error,
      });
    });
 };