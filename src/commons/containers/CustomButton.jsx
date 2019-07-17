/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'react-bootstrap';
import '../CSS/CustomButton.scss';
import PropTypes from 'prop-types';


const CustomButton = props => (
  <>
    <Button className="custom-btn" href={props.link} active>{props.btnlabel}</Button>
  </>
);

CustomButton.propTypes = {
  btnlabel: PropTypes.string,
  link: PropTypes.string,
};

CustomButton.defaultProps = {
  btnlabel: 'stranger',
  link: '/articles',
};

export default CustomButton;
