import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/change.scss';

const Loader = require('react-loader');

const ChangePassword = (
    {
        handleSubmit,
        onChange,
        password,
        confirmPassword,
        errors,
        isLoading,
        request_success,
    }
    ) => {
        return (
            <div className="container">
              <div className="heading">
                <h1>Create New Password</h1>
              </div>
              <div className="form">
                <form className="input-form">
                  <div className="form-input">
                    <input type="text" id="NewPassword" name="password" value={password} onChange={onChange} placeholder="New Password" required />
                    <div className="errors">
                    {
                      errors.newPassword && (errors.newPassword)
                    }
                    </div>
                  </div>
                  <div className="form-input">
                    <input type="text" id="ConfirmPassword" name="confirmpassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
                    <div className="errors">
                    {
                      errors.confirmPassword && (errors.confirmPassword)
                    }
                    </div>
                  </div>
                  <div className="success">
                    {
                      request_success && ('Success! Your Password has be changed.')
                    }
                  </div>
                  <Loader loaded={!isLoading}>
                  <div className="form-input">
                    <button type="button" onClick={handleSubmit}>Submit</button>
                  </div>
                  </Loader>
      
                </form>
              </div>
      
            </div>
          );
    };


  ChangePassword.propTypes = {
    password: PropTypes.string,
    ConfirmPassword: PropTypes.string,
    errors: PropTypes.object,
    handleSubmit:PropTypes.func
};

export default ChangePassword;
