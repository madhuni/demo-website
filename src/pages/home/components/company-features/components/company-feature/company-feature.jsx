/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './company-feature.css';

const companyFeature = (props) => {
  return (
    <div className="company-feature">
      <div className="company-feature-img-container flex-row">
        <img src={props.url} alt="Icon" width="100" height="100"/>
      </div>
      <div className="company-feature-details">
        <div className="subtitle">
          <span>{props.subtitle}</span>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default companyFeature;