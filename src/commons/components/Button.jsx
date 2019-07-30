import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    buttonEvent, disabled, buttonClass, buttonName,
  } = props;

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={buttonEvent}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  buttonName: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonEvent: PropTypes.func.isRequired,
};

export default Button;
