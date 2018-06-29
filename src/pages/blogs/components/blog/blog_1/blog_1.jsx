/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import SectionHeading from '../../../../../components/pages-component/section-heading/section-heading';

import img1 from './assets/images/product-image.jpg';
import img2 from './assets/images/product-image-1.jpg';
import img3 from './assets/images/product-image-2.jpg';

import '../blog.css';
import './blog_1.css';

class Blog_1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--blog">
        <section className="section">
          <div className="container">
            <SectionHeading name={"Ethereal Concrete 3D Printer"} classValue={"u-margin-bottom-small u-text-center"}/>
            <div className="main-img-container single-col-layout">
              <img src={img1} alt="Ethereal Concrete 3D Printer"/>
            </div>
            <div className="blog-text">
              <p>
                Ethereal Machines is proud to announce it’s latest creation, India’s first automated concrete laying machine – a Concrete 3D printer (Patent filed). Concrete 3D printing technology has the potential to enable housing for millions of people.
              </p>
              <p>
                A drastic pivot in the construction industry is long overdue as traditional methods of infrastructure construction have a few drawbacks. The current processes are expensive, slow, labor intensive, generate a lot of construction waste, difficult to implement in remote areas and do not allow for complex shape creation. These methods create economic and logistical hurdles for low cost housing, rapid and emergency relief construction.
              </p>
              <p>
                We strongly believe that every Indian family is entitled to a stable abode. Better infrastructure is the harbinger of a bright prospective future for our country. Automating the construction industry is the only approach towards achieving that goal, as it will lead to faster and cheaper construction techniques. It also enables in reaching out to hinterlands where building structures is cumbersome.
              </p>
              <p>
                Our initial attempts will be on the lines of the Swachh Bharat Abhiyaan to 3D print toilets across India. India has an estimated urban housing shortage of 18.8 million dwelling units and a rural housing shortage of 47.4 million units. With the Ethereal Concrete 3D printing technology we hope to cater to this lacuna. We will also be targeting low cost housing, remote location construction and emergency relief constructions.
              </p>
              <p>
                At present, we are testing out formulations of the concrete mixture to optimize build time and enhance durability of the printed structure. In-depth details of our technology, materials used and projects undertaken will be released soon.
              </p>
            </div>
            <div className="secondary-img-container three-col-layout">
              <img src={img2} alt="Ethereal Concrete 3D printer" width="400"/>
              <img src={img3} alt="Ethereal Concrete 3D printer" width="400"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog_1;