/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './company-features.css';

import CompanyFeature from './components/company-feature/company-feature';

import features from './features';

const companyFeatures = (props) => {
  const featureItems = features.map((item) => {
    return (
      <CompanyFeature key={item.id} url={item.iconUrl} subtitle={item.subtitle} text={item.text}/>
    );
  });
  return (
    <div className="company-features-container three-col-layout">
      {featureItems}
    </div>
  );
};

export default companyFeatures;