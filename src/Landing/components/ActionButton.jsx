import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton from '../../commons/containers/CustomButton';

export default function ActionButton() {
  return (
    <Row>
      <Col sm={12} className="call-for-action">
        <CustomButton btnlabel="See More Articles" link="/articles" />
      </Col>
    </Row>
  );
}
