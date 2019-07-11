import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/reset.scss';

const Loader = require('react-loader');

const ResetPassword = (
    {
        handleSubmit,
        onChange,
        email,
        errors,
        isLoading,
        request_success,
        request_errors,
    }
    ) => {
        return (
            <div className="container">
              <div className="heading">
                <h1>Reset Password</h1>
              </div>
              <div className="form">
                <form className="input-form">
      
                  <div className="note">
                    <p>Input the email attached to your account to request for a Password Reset Link</p>
                  </div>
                  <div className="form-input">
                    <input type="text" id="UserEmail" name="email" value={email} onChange={onChange} placeholder="Email Address" required />
                    <div className="errors">
                    {
                      errors.userEmail && (errors.userEmail)
                    }
                    {
                      request_errors && ('No account with that email')
                    }
                    </div>
                    <div className="success">
                    {
                      request_success && ('Success! Check your email for a reset link.')
                    }
                    </div>
                   </div>
                  <Loader loaded={!isLoading} className="custom-loader">
                   <div className="form-input">
                    <button type="button" onClick={handleSubmit}>Request Link</button>
                  </div>
                  </Loader>
      
                </form>
              </div>
      
            </div>
          );
    };

ResetPassword.defaultProps= {
  errors: {},
};

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.object,
  handleSubmit:PropTypes.func.isRequired
};

export default ResetPassword;
