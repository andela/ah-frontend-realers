import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChangePassword from './ChangeForm';
import changeUtil from '../redux/validations';
import withPasswordState from '../containers/withPasswordState';
import ChangeStrings from '../constants';

export class ChangePasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      errors: {},
      success:{}
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value , errors:{}, success:{}});
  }

  checkValidPassword = (userPassword) => {
    const passwordFormat = changeUtil.CHANGE_UTILS;
    if (userPassword.match(passwordFormat)) {
      return true;
    }
    return false;
  };

  checkPasswordMatch = (userPassword, confirmPassword) => {
    if (userPassword.match(confirmPassword)) {
      return true;
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {password} = this.state
    const userdata = {
      password: password,
      confirm_password: confirmPassword
    };
    const { history, changePasswordAction } = this.props;
    
    if (password === "" ) {
      this.setState({ errors: { newPassword: ChangeStrings.EMPTY_PASSWORD_ERROR } })
    } else if (!this.checkValidPassword(password)) {
      this.setState({ errors: { newPassword: ChangeStrings.INVALID_PASSWORD_ERROR } });
    } else if (!this.checkValidPassword(password, confirmPassword)) {
      this.setState({ errors: { confirmPassword: ChangeStrings.UNMATCHING_PASSWORD_ERROR } });
    }
    else {
      changePasswordAction(userdata, history);
    }
  }

  render() {
    const {password, confirmPassword, errors} = this.state;
    const {request_success, request_errors, isLoading} = this.props
    return (
      <ChangePassword
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        password={password}
        confirmPassword={confirmPassword}
        errors={errors}
        request_success={request_success}
        request_errors={request_errors}
        isLoading={isLoading}
      />
    );
  }
}

ChangePasswordContainer.propTypes = {
  changePasswordAction: PropTypes.func,
};

export default withPasswordState(ChangePasswordContainer);
