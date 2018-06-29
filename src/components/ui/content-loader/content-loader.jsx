/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './content-loader.css';

// import Spinner from '../spinner/spinner';

const contentLoader = (props) => {
  return (
    // <div className="content-loader">
    //   <Spinner />
    //   <p className="loading-text">Loading...</p>
    // </div>
    <div className="content-loader content-loader--media flex-row">
      <div className="img-loader-container"></div>
      <div className="media-details-loader">
        <div className="title-loader"></div>
        <div className="publisher-date-loader">
          <span className="publisher-loader"></span>
          <span className="date-loader"></span>
        </div>
        <div className="description-loader"></div>
        <div className="btn-loader"></div>
      </div>
    </div>
  );
};

export default contentLoader;