/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../CSS/StatusLabel.scss';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SuccessLabel({ message }) {
  return (
    <Alert variant="success" className="status-box">
      {message}
    </Alert>
  );
}

SuccessLabel.propTypes = {
  message: PropTypes.string,
};


SuccessLabel.defaultProps = {
  message: 'Success ',
};

export default SuccessLabel;
