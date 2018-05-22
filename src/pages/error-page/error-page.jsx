/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import './error-page.css';

class ErrorPage extends Component {
  render() {
    return (
      <div className="page page--error-page">
        404
        <p>Sorry! The page you are looking for doesn't exists.</p>
      </div>
    );
  }
}

export default ErrorPage;