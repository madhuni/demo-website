/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './form-control.css';

const formControl = (props) => {
  return (
    <div className="form-control flex-column">
      {props.children}
    </div>
  );
};

export default formControl;