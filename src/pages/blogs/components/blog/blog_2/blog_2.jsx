/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import SectionHeading from '../../../../../components/pages-component/section-heading/section-heading';

import '../blog.css';
import './blog_2.css';

import img1 from './assets/images/ethereal-halo-banner.png';
import img2 from './assets/images/ethereal-halo.png';

class Blog_2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--blog">
        <section className="section">
          <div className="container">
            <SectionHeading name={"Ethereal Machies Named as CES 2018 Best of Innovation Awards Honoree"} classValue={"u-margin-bottom-small u-text-center"}/>
            <div className="main-img-container single-col-layout">
              <img src={img1} alt="Halo Banner"/>
            </div>
            <div className="blog-text">
              <div className="blog-subtitle subtitle u-margin-bottom-small">
                <span>Ethereal Halo - The world's first consumer oriented 5-axis CNC and 5-axis 3D printer</span>
              </div>
              <p>
                New York, NY, 9th November 2017 – Ethereal Machines today announced that it has been named a CES 2018 Best of Innovation Awards Honoree for Halo, designed to bring about a metamorphosis to the world of manufacturing and usher the concept of hybrid manufacturing.
              </p>
              <p>
                Products entered in this prestigious program are judged by a preeminent panel of independent industrial designers, independent engineers and members of the trade media to honor outstanding design and engineering in cutting edge consumer electronics products across 28 product categories.
              </p>
              <div className="text-img flex-row">
                <p>
                  <em>″Ethereal Halo is a machine that introduces Hybrid Manufacturing to the world and combines both the technologies of subtractive manufacturing and additive manufacturing into one bundle , designed to bring about a metamorphosis to the world of manufacturing and usher the concept of hybrid manufacturing. We’ve pushed the boundaries of today’s technologies to build the world’s first consumer oriented 5 axis CNC router and 5 axis 3D printer to initiate the concept of hybrid manufacturing. Being the first Indian Company to win Best of Innovation at CES makes it all the more special.″</em> says <strong>Navin Jain , Co-Founder & CTO.</strong>
                </p>
                <img src={img2} alt="Ethereal Halo" width="500"/>
              </div>
              <p>
                Ethereal Machines’ Halo will be displayed at CES 2018, at booth number 9503, LVCC North Hall, which runs January 9-12, 2018, in Las Vegas, Nevada.
              </p>
              <div className="blog-subtitle subtitle u-margin-bottom-small">
                <span>About CES Innovation Awards</span>
              </div>
              <p>
                The prestigious CES Innovation Awards are sponsored by the Consumer Technology Association (CTA)™, owner and producer of CES 2018, the global gathering place for all who thrive on the business of consumer technologies, and have been recognizing achievements in product design and engineering since 1976.
              </p>
              <p>
                Products chosen as CES Best of Innovation Honorees reflect innovative design and engineering in some of the most cutting edge tech products and services coming to market. CES 2018 Innovation Honoree products are featured on CES.tech/Innovation, which lists product categories, as well as each product name, manufacturer information, description, photo and URL.
              </p>
              <div className="blog-subtitle subtitle u-margin-bottom-small">
                <span>About Halo</span>
              </div>
              <p>
                HALO is the panacea for consumers and institutions that rely on FDM 3-D printing (a temperature-controlled head extrusion of thermoplastic material) but are limited by the capabilities of 3-axis 3-D printing. Designed after several iterations to blend into both formal and informal spaces with its seamless lighting and sharp edges, Halo provides an unmarked view of the work in progress and a surreal view of the next revolution in the manufacturing industry.
              </p>
              <p>
                Being the world’s first 5-axis 3D printer and a 5-axis CNC Router, bundled up into one single affordable machine, The Halo is poised to become the bulwark of the manufacturing industry and heralds the future. Unleashing of the Halo will result in creating futuristic products for the better of mankind and empower the consumer.
              </p>
              <div className="blog-subtitle subtitle u-margin-bottom-small">
                <span>About Ethereal Machines</span>
              </div>
              <p>
                Ethereal Machines breathes by the mission of churning out entrepreneurs in the engineering world. Our machines are built to invigorate, nurture and embolden an engineer while unbridling the designer’s freedom to create. Founded in 2014, Ethereal Machines brings about a conjunction between additive and subtractive manufacturing techniques.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog_2;