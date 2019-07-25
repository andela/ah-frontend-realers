import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../commons/components/Button';
import '../CSS/articlePagination.scss';

const Pagination = ({
  paginate, currentPage, count, next, previous,
}) => {
  const numberOfPages = Math.ceil(count / 6);
  return (
    <div className="paginate-article">
      <Button
        buttonName=""
        buttonClass="fa fa-backward"
        buttonEvent={e => {
          e.preventDefault();
          paginate(previous, -1);
        }}
        disabled={!previous}
      />
      <span>
        {currentPage || 1}
        {' '}
        {'/'}
        {' '}
        {numberOfPages}
        {' '}
        {'pages '}
      </span>
      <Button
        buttonName=""
        buttonClass="fa fa-forward"
        buttonEvent={e => {
          e.preventDefault();
          paginate(next, 1);
        }}
        disabled={!next}
      />
    </div>
  );
};

Pagination.defaultProps = {
  next: '',
  previous: '',
};

Pagination.propTypes = {
  next: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  previous: PropTypes.string,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
