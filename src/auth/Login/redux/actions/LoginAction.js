import { toast } from 'react-toastify';
import axios from 'axios';
import loginTypes from '../types';
import loginUrl from '../loginUrls';

const loginAction = (userdata) => (dispatch) => {
  dispatch({
    type: loginTypes.IS_LOGGING_IN,
  });
  return axios.post(loginUrl.LOGIN_URL, userdata)
    .then((res) => {
      toast.success('Logged in', 'success', 5000);
      localStorage.setItem('user_token', res.data.user.token);
      localStorage.setItem('username', res.data.user.username);
      dispatch({
        type: loginTypes.LOGIN_SUCCESS,
        payload: res.data.user,
      });
      window.location = '/';
    })
    .catch((error) => {
      dispatch({
        type: loginTypes.LOGIN_ERROR,
        payload: error,
      });
    });
};

export default loginAction;
