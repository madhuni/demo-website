/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './content-loader.css';

import Spinner from '../spinner/spinner';

const contentLoader = (props) => {
  return (
    <div className="content-loader">
      <Spinner />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default contentLoader;