/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import '../LoginStyles/login.scss';
import FacebookButton from '../../socialAuth/facebook/components/Facebook';
import GoogleButton from '../../socialAuth/google/components/Google';


const Loader = require('react-loader');

const Login = (
  {
    handleSubmit,
    onChange,
    email,
    password,
    errors,
    isLoggingIn,
    loginFailed,
    isLoading,
  },
) => (

  <div className="Login-container">
    <div className="heading">
      <h1>Login</h1>
    </div>
    <div className="myform">
      <form>
        {
          loginFailed
            ? (
              <div className="errors">
            Please provide valid credentials
                {loginFailed}
              </div>
            )
            : (<span />)
          }
        <div className="form-input" id="errormessage">
          <input type="text" id="userEmail" name="email" placeholder="Email" value={email} onChange={onChange} required />
          {
           errors.invalid_email
             ? (
               <div className="errors">
               please provide valid email
                 {errors.userEmail }
               </div>
             )
             : (<span />)
          }
          {
              errors.userEmail && (<div className="errors">{errors.userEmail}</div>)
          }
        </div>
        <br />
        <div className="form-input" id="errormessage">
          <input type="password" value={password} placeholder="Password" name="password" onChange={onChange} />
          {
              errors.userPassword && (<div className="errors">{errors.userPassword}</div>)
            }
        </div>
        <p className="mypara"><a href="/reset">Forgot Password?</a></p>
        <br />
        <Loader loaded={!isLoading}>
          <div className="form-input">
            <button type="button" onClick={handleSubmit} disabled={isLoggingIn}>
              { isLoggingIn ? (<span>loading...</span>) : (<span>Login</span>)}
            </button>
          </div>
          <p className="mypara2">
            Or signup with
          </p>
          <FacebookButton />
          <GoogleButton />
        </Loader>

      </form>
    </div>

  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  loginFailed: PropTypes.bool,
  isLoading: PropTypes.bool,
};
Login.defaultProps = {
  loginFailed: false,
  isLoading: false,
};


export default Login;
