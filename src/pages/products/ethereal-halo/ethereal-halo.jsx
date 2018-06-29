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
import Modal from '../../../components/ui/modal/modal';

import halo from '../assets/images/halo.png';
// import haloMedium from '../assets/images/halo--medium.png';
// import haloLarge from '../assets/images/halo--larger.png';

import etherealHaloData from './ethereal-halo-data';

class EtherealHalo extends Component {

  state = {
    showModal: false
  }

  stopPlayingVideo = () => {
    /* A simple method to stop the youtube video when the modal is closed */
    let iframe = document.querySelector('.player'); // getting the iframe element
    const iframeSrc = iframe.src; // getting the source of element
    iframe.src = iframeSrc; // resetting the source of the element
  }

  showModal = () => {
    this.setState({
      ...this.state,
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });

    this.stopPlayingVideo();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} clicked={this.closeModal}>
          <iframe
            width="720"
            height="420"
            src="https://www.youtube-nocookie.com/embed/4c_7WmSYjMU?rel=0" frameBorder="0"
            allowFullScreen
            className="player">
          </iframe>
        </Modal>
        <div className="page page--ethereal-halo">
          <PageBanner heading={'The Ethereal Halo'} subHeading={'The Dawn of Hybrid Manufacturing'} classValue={'page-banner--halo'}>
            <div className="btn btn--golden btn--transparent btn--center-aligned u-text-center" onClick={this.showModal}>Watch Video</div>
          </PageBanner>
          <section className="section section--about-product">
            <div className="container">
              <div className="col-12-grid">
                <div className="product-details">
                  <SectionHeading name={"About Ethereal Halo"} classValue={"u-margin-bottom-small u-text-left"}/>
                  <div className="detail-text">
                    <p>The Ethereal Halo has been designed to bring about a metamorphosis to the world of manufacturing and kick off the concept of hybrid manufacturing. Ethereal Halo is the world’s first consumer oriented 5-axis 3-D printer and 5-axis CNC Router.</p>
                    <p>Ethereal Halo is a machine that introduces Hybrid Manufacturing to the world and combines both the technologies of subtractive manufacturing and additive manufacturing into one bundle, with a high degree of accuracy.</p>
                    <p>The Halo can equip an entire spectrum ranging from the hobbyist to an industry with quick prototyping and manufacturing abilities. A 5-axis printer and a 5-axis CNC Router bundled up into one single affordable machine heralds the future.</p>
                  </div>
                </div>
                <div className="product-img flex-column">
                  <img src={halo} alt="Product" width="464" height="358"/>
                </div>
              </div>
            </div>
          </section>
          <ProductFeatures features={etherealHaloData.features} />
          <ProductTechSpecs techSpecs={etherealHaloData.techSpecs} product={'halo'}/>
          <LazyLoad height={200} offset={100} once>
            <ContactUs />
          </LazyLoad>
        </div>
      </React.Fragment>
    );
  }
}

export default EtherealHalo;