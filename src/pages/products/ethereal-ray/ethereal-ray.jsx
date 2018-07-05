/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import '../products.css';

import SectionHeading from '../../../components/pages-component/section-heading/section-heading';
import PageBanner from '../../../components/ui/page-banner/page-banner';
import ProductFeatures from '../components/product-features/product-features';
import ProductTechSpecs from '../components/product-tech-specs/product-tech-specs';
import ContactUs from '../components/contact-us/contact-us';

// import ray from '../assets/images/ray.jpg';
import ray from '../assets/images/ray.png';

import etherealRayData from './ethereal-ray-data';

class EtherealRay extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--ethereal-ray">
        <PageBanner heading={'The Ethereal Ray'} subHeading={'A smart dual extruder printer for your everyday 3D printing needs!'} classValue={'page-banner--ray'}/>
        <section className="section section--about-product">
          <div className="container">
            <div className="col-12-grid">
              <div className="product-details">
                <SectionHeading name={"About Ethereal Ray"} classValue={"u-margin-bottom-small u-text-left"} />
                <div className="detail-text">
                  <p>The Ethereal Ray is a smart device built to unbridle the designer and
                  engineer in you. Equipped with two nozzles, the Ray helps
                  you achieve prints with dissolvable support materials and dual
                  colours.</p>
                  <p>Print seamlessly via Wi-Fi. Slice on the cloud. Monitor through
                  your phone. Save prints on the cloud.</p>
                  <p>User experience takes top priority at Ethereal Machines. The
                  Ray dons a 5.5" capacitive touchscreen and LEDs that signal
                  various stages of a print to enhance user experience.</p>
                  <p>The Ethereal Ray is poised to provide a makeover to your
                  desktop and is your tool to take your ideas from design to
                  prototype stage.</p>
                </div>
              </div>
              <div className="product-img flex-column">
                <img src={ray} alt="Product" width="464" height="358" />
              </div>
            </div>
          </div>
        </section>
        <ProductFeatures features={etherealRayData.features} />
        <ProductTechSpecs techSpecs={etherealRayData.techSpecs} product={'ray'}/>
        <LazyLoad height={200} offset={100} once>
          <ContactUs />
        </LazyLoad>
      </div>
    );
  }
}

export default EtherealRay;