/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import SectionHeading from '../../../../components/pages-component/section-heading/section-heading';

import ray from '../../assets/images/images-no-padding/ray.png';
import halo from '../../assets/images/images-no-padding/halo.png';
import pentagram from '../../assets/images/images-no-padding/pentagram.png';

import './product-tech-specs.css';

const productTechSpecs = (props) => {
  const productTech = props.techSpecs;
  const techSpecs = productTech.map(techSpec => {
    return (
      <div className="tech-spec flex-row" key={techSpec.id}>
        <span className="tech-spec-heading u-text-left">{techSpec.title}</span>
        <span className="tech-spec-detail u-text-right">{techSpec.description}</span>
      </div>
    );
  });

  let productImg;
  switch (props.product) {
    case 'ray':
      productImg = <img src={ray} alt="Ray" />
      break;
    case 'halo':
      productImg = <img src={halo} alt="Halo" />
      break;
    case 'pentagram':
      productImg = <img src={pentagram} alt="Pentagram" />
      break;

    default:
      break;
  }

  return (
    <section className="section section--product-tech-specs">
      <div className="container">
        <div className="col-12-grid">
          <div className="product-img product-img--left flex-column">
            {productImg}
          </div>
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