/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import LazyLoad from 'react-lazyload';

import SectionHeading from '../../../../components/pages-component/section-heading/section-heading';

import './product-features.css';

const productFeatures = (props) => {
  const productFeatures = props.features;
  const features = productFeatures.map(feature => {
    return (
      <div className="feature flex-row" key={feature.id}>
        <div className="feature-img-container">
          <LazyLoad height={100} offset={100} once>
            <img src={feature.imgUrl} alt="Feature Icon" width="80" height="80" />
          </LazyLoad>
        </div>
        <div className="feature-details-container">
          <div className="subtitle u-text-white">
            <span>{feature.title}</span>
          </div>
          <p>{feature.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="section section--product-features section--background-fill">
      <div className="container">
        <SectionHeading name={"Product Features"} classValue={"u-margin-bottom-big u-text-center u-text-white"} />
        <div className="feature-container three-col-layout">
          {features}
        </div>
      </div>
    </section>
  );
};

export default productFeatures;