/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import './home.css';

import PageBanner from '../../components/ui/page-banner/page-banner';
import SectionHeading from '../../components/pages-component/section-heading/section-heading';
import ContactUsBanner from '../../components/pages-component/contact-us-banner/contact-us-banner';
import HomePageMedia from './components/home-page-media/home-page-media';
import CompanyFeatures from './components/company-features/company-features';
import Products from './components/products/products';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--home">
        <PageBanner heading={"Welcome to Ethereal Machines"} subHeading={"We build the future of hybrid manufacturing"} classValue={"page-banner--home"} />
        <section className="section section--products">
          <div className="container">
            <SectionHeading name={"Our wide range of industrial grade products"} classValue={"u-margin-bottom-big u-text-center"} />
            <LazyLoad height={200} offset={200} once>
              <Products />
            </LazyLoad>
          </div>
        </section>
        <section className="section section--why-us section--background-fill">
          <div className="container">
            <SectionHeading name={"Why we are the best"} classValue={"u-margin-bottom-big u-text-center u-text-white"} />
            <LazyLoad height={200} offset={200} once>
              <CompanyFeatures />
            </LazyLoad>
          </div>
        </section>
        <section className="section section--in-media">
          <div className="container">
            <SectionHeading name={"Ethereal Machines in Media"} classValue={"u-margin-bottom-big u-text-center"} />
            <LazyLoad height={200} offset={200} once>
              <HomePageMedia />
            </LazyLoad>
          </div>
        </section>
        <section className="section section--contact-us">
          <div className="container">
            <SectionHeading name={"Contact Us"} classValue={"u-margin-bottom-big u-text-center"} />
            <LazyLoad height={200} offset={200} once>
              <ContactUsBanner
                firstText={"Want to exporle more about us?"}
                secondText={"Write us for any queries."}
              />
            </LazyLoad>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;