/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './form-success-msg.css';

import icon from './success-icon.svg';

const formSuccessMsg = (props) => {
  return (
    <div className="form-success-msg flex-column">
      <img src={icon} alt="Done" width="60" height="60"/>
      <p className="main-text u-text-center">Your request has been successfully registered!</p>
      <p className="sub-text u-text-center">You will shortly receive a confirmation mail from us.</p>
    </div>
  );
};

export default formSuccessMsg;