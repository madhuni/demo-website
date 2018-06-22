/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './button.css';

const button = (props) => {
  return (
    <button className={props.classValue} type="submit" disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default button;