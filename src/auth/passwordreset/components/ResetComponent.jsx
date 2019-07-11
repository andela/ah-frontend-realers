import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResetPassword from './ResetForm';
import resetUtil from '../redux/validations';
import withPasswordState from '../containers/withPasswordState';
import ResetStrings from '../constants';

export class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      success:{}
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value , errors:{}, success:{}});
  }

  checkValidEmail = (userEmail) => {
    const mailFormat = resetUtil.RESET_UTILS;
    if (userEmail.match(mailFormat)) {
      return true;
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email} = this.state
    const userdata = {
      email: email
    };
    const { history, resetPasswordAction } = this.props;
    
    if (email === "" ) {
      this.setState({ errors: { userEmail: ResetStrings.EMPTY_EMAIL_ERROR } })
    } else if (!this.checkValidEmail(email)) {
      this.setState({ errors: { userEmail: ResetStrings.INVALID_EMAIL_ERROR } });
    }
    else {
      resetPasswordAction(userdata, history);
    }
  }


  render() {
    const {email, errors} = this.state;
    const {request_success, request_errors, isLoading} = this.props
    return (
      <ResetPassword
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        email={email}
        errors={errors}
        request_success={request_success}
        request_errors={request_errors}
        isLoading={isLoading}
      />
    );
  }
}

ResetPasswordContainer.propTypes = {
  resetPasswordAction: PropTypes.func,
};

export default withPasswordState(ResetPasswordContainer);
