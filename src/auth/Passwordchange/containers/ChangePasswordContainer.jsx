import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePasswordAction } from '../redux/actions/postAction';
import ChangePassword from '../components/ChangePasswordComponent';
import changePasswordUtil from '../redux/validations';

export class ChangePasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      ConfirmPassword: '',
      errors: {},
      success:{}
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value , errors:{}, success:{}});
  }

  checkValidPassword = (password) => {
    const passwordFormat = changePasswordUtil.CHANGE_UTILS;
    if (password.match(passwordFormat)) {
      return true;
    }
    return false;
  };

  checkMatchingConfirmPassword = (confirmPassword, password) => {
    if (confirmPassword.match(password)) {
      return true;
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {password, confirmPassword} = this.state
    const userdata = {
      password: password,
      confirmPassword: confirmPassword
    };
    
    if (password === "" ) {
      this.setState({ errors: { newPassword: 'Password field required' } })
    } else if (!this.checkValidPassword(password)) {
      this.setState({ errors: { newPassword: 'Invalid password format' } });
    } else if (!this.checkMatchingConfirmPassword(confirmPassword, password)) {
      this.setState({ errors: { confirmPassword: 'Passwords don\'t match!' } });
    }
    else {
      this.props.changePasswordAction(userdata, this.props);
    }
  }

  render() {
    const {password, ConfirmPassword, errors} = this.state;
    const {request_success} = this.props
    return (
      <ChangePassword
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        password={password}
        ConfirmPassword={ConfirmPassword}
        errors={errors}
        request_success={request_success}
      />
    );
  }
}

ChangePasswordContainer.propTypes = {
  changePasswordAction: PropTypes.func,
};

const mapStateToProps = state => ({
  request_success: state.changePassword.success
});
export default connect(mapStateToProps, { changePasswordAction })(ChangePasswordContainer);
