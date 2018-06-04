/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import Fade from 'react-reveal/Fade';

import SectionHeading from '../../../../components/pages-component/section-heading/section-heading';

import halo from '../../assets/images/halo--larger.png';

import './product-tech-specs.css';

const productTechSpecs = (props) => {
  const productTech = props.techSpecs;
  let techSpecs = [];

  productTech.map(techSpec => {
    techSpecs.push(
      <div className="tech-spec flex-row" key={techSpec.id}>
        <span className="tech-spec-heading u-text-left">{techSpec.title}</span>
        <span className="tech-spec-detail u-text-right">{techSpec.description}</span>
      </div>
    );
  });

  return (
    <section className="section section--product-tech-specs">
      <div className="container">
        <div className="col-12-grid">
          <Fade left>
            <div className="product-img product-img--left flex-column">
              <img src={halo} alt="Halo"/>
            </div>
          </Fade>
          <div className="tech-specs-container">
            <SectionHeading name={"Technical Specifications"} classValue={"u-margin-bottom-small u-text-center"} />
            <div className="tech-specs flex-column">
              {techSpecs}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default productTechSpecs;