/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './backdrop.css';

const backdrop = (props) => {
  const classes = ['backdrop'];
  
  if (props.show) {
    classes.push('backdrop-open');
  } else {
    classes.push('backdrop-close');
  }

  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default backdrop;