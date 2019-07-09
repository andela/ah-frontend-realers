import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../components/LoginComponent';
import loginUtil from '../redux/validations';
import loginAction from '../redux/actions/LoginAction';

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        invalid_email: false,
      },
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    const { target } = event;
    const { name, value } = target;
    const { errors } = this.state;
    switch (name) {
      case 'email':
        if (!this.checkValidEmail(value)) {
          this.setState({ errors: { userEmail: 'Please provide a valid email address' } });
          errors.invalid_email = true;
        } else {
          this.setState({ errors: { userEmail: '' } });
          errors.invalid_email = false;
        }
        break;
      default:
        break;
    }

    this.setState({ [event.target.name]: event.target.value });
  }

  checkValidEmail = (userEmail) => {
    const mailFormat = loginUtil.LOGIN_UTILS;
    if (userEmail.match(mailFormat)) {
      return true;
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userdata = {
      user: {
        email,
        password,
      },
    };

    if (email === '') {
      this.setState({ errors: { userEmail: 'Email field required' } });
    }
    if (password === '') {
      this.setState({ errors: { userPassword: 'Password field is required' } });
    }
    const { propsLoginAction } = this.props;

    const { errors } = this.state;
    if (!errors.invalid_email && errors.userEmail === '') {
      propsLoginAction(userdata, this.props);
    }
  }

  render() {
    const { email, password, errors } = this.state;
    const {
      isLoggingIn,
      isLoading,
      loginFailed,
    } = this.props;
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        email={email}
        password={password}
        errors={errors}
        isLoggingIn={isLoggingIn}
        loginFailed={loginFailed}
        isLoading={isLoading}
      />
    );
  }
}

LoginContainer.propTypes = {
  propsLoginAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  loginFailed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  login: state.login,
  isLoggingIn: state.login.is_logging_in,
  loginFailed: state.login.login_failed,
  isLoading: state.login.isLoading,
});
export default connect(mapStateToProps, { propsLoginAction: loginAction })(LoginContainer);
