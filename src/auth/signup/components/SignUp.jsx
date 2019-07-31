import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signUpUser from '../redux/actions/signUpAction';
import validation from '../Validation';
import '../CSS/signup.scss';

const Loader = require('react-loader');

export const SignUpUserForm = ({ signUpUser: signUp, isLoading }) => {
  const [fields, setFields] = useState({ username: '', email: '', password: '' });
  const [touched, setTouched] = useState({ username: false, email: false, password: false });

  const onSubmit = (e) =>  {
    const userData = {
      user: {
        email: fields.email,
        username: fields.username,
        password: fields.password,
      },
    };
    signUp(userData);
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="heading">
        <h1>Create Account</h1>
      </div>
      <div className="form">
        <form className="form-sigup">
          <p id="success" />
          <div className="email">
            <input
              type="text"
              id="email"
              name="email"
              value={fields.email}
              onChange={(e) => {
                setFields({ ...fields, email: e.target.value });
              }}
              placeholder="Email"
              required
            />
          </div>
          {
            fields.email.length > 1 && validation('email', fields.email)
            && <p id="errors">{validation('email', fields.email)}</p>
          }

          <p id="errors">{touched.email && validation('email')}</p>
          <div className="username">
            <input
              type="username"
              id="username"
              name="username"
              value={fields.username}
              onChange={(e) => {
                setFields({ ...fields, username: e.target.value });
              }}
              placeholder="Username"
              required
            />
          </div>
          <p id="errors_username" />
          <div className="password">
            <input
              type="password"
              id="password"
              name="password"
              value={fields.password}
              onChange={(e) => {
                setFields({ ...fields, password: e.target.value });
              }}
              placeholder="password"
              required
            />
          </div>
          {
            fields.password.length > 1 && validation('password', fields.password)
            && <p id="errors">{validation('password', fields.password)}</p>
          }
          <Loader loaded={!isLoading}>
            <button type="submit" onClick={onSubmit}>Create Account</button>
            <p className="mypara2">
              Or signup with
              <a href="#" className="fa fa-facebook" />
              <a href="#" className="fa fa-twitter" />
              <a href="#" className="fa fa-google" />

            </p>
          </Loader>

        </form>
      </div>

    </div>
  );
};

SignUpUserForm.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.signUpUser.isLoading,
});


export default connect(mapStateToProps, { signUpUser })(SignUpUserForm);
