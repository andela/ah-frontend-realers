/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../CSS/Loading.scss';

function Loading() {
  return (

    <div className="d-flex justify-content-center loading">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
