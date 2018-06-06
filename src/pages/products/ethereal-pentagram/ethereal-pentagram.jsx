/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../products.css';

import SectionHeading from '../../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../../components/ui/page-banner/page-banner';
import ProductFeatures from '../components/product-features/product-features';
import ProductTechSpecs from '../components/product-tech-specs/product-tech-specs';
import ContactUs from '../components/contact-us/contact-us';

import pentaLarge from '../assets/images/pentagram--large.jpg';
import pentaMedium from '../assets/images/pentagram--medium.png';
import pentaLarger from '../assets/images/pentagram-first-frame-2.jpg';

import etherealPentagramData from './ethereal-pentagram-data';

class EtherealPentagram extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--ethereal-pentagram">
        <PageBanner heading={'The Ethereal Pentagram'} subHeading={'World\'s First Desktop Simultaneous 5 Axis CNC Machine'} classValue={'page-banner--pentagram'}/>
        <section className="section section--about-product">
          <div className="container">
            <div className="col-12-grid">
              <div className="product-details">
                <SectionHeading name={"About Ethereal Pentagram"} classValue={"u-margin-bottom-small u-text-left"} />
                <div className="detail-text">
                  <p>The Pentagram has been designed to be the world's first desktop simultaneous 5 axis subtractive manufacturing machine. Equipped with the capabilities of machining a plethora of materials, the Pentagram is poised to disrupt the manufacturing industry.</p>
                  <p>Pentagram has been made keeping in mind both the industrial users and amateur users. The Pentagram is a one stop solution for manufacturing smaller moulds, machining wax, etching PCBs, cutting precision parts and creating novelty products. The machine is compatible with a wide range of designing softwares ensuring easy operability of the machine.</p>
                </div>
              </div>
              <Fade right>
                <div className="product-img flex-column">
                  <img src={pentaLarger} alt="Product" width="464" height="358" />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <ProductFeatures features={etherealPentagramData.features}/>
        <ProductTechSpecs techSpecs={etherealPentagramData.techSpecs}/>
        <ContactUs />
      </div>
    );
  }
}

export default EtherealPentagram;