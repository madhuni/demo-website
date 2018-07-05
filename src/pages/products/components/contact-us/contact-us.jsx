/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import SectionHeading from '../../../../components/pages-component/section-heading/section-heading';
import ContactUsBanner from '../../../../components/pages-component/contact-us-banner/contact-us-banner';

const contactUs = (props) => {
  return (
    <section className="section section--contact-us">
      <div className="container">
        <SectionHeading name={"Contact Us"} classValue={"u-margin-bottom-big u-text-center"} />
        <ContactUsBanner
          firstText={"Let's partner up!"}
          secondText={"Contact us to become a Distributor/ Reseller or if you have any technical query."}
        />
      </div>
    </section>
  );
};

export default contactUs;