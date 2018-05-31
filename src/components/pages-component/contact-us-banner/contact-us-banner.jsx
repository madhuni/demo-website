/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './contact-us-banner.css';

import NavBtn from '../../../components/ui/nav-btn/nav-btn';

const contactUsBanner = (props) => {
  return (
    <div className="contact-us-banner">
      <div className="content">
        <div className="question">
          <span>{props.firstText}</span>
          <br/>
          <span>{props.secondText}</span>
        </div>
        <NavBtn url={'contact'} classValue={'btn--transparent btn--left-aligned'}>Contact Us</NavBtn>
      </div>
    </div>
  );
};

export default contactUsBanner;