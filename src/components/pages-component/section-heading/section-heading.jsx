/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

const sectionHeading = (props) => {
  return (
    <div className={props.classValue}>
      <h3 className="section-heading">{props.name}</h3>
    </div>
  );
};

export default sectionHeading;