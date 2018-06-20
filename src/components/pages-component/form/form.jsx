/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './form.css';

const form = (props) => {
  return (
    <form className={props.classValue} onSubmit={props.onSubmitHandler}>
      {props.children}
    </form>
  );
};

export default form;