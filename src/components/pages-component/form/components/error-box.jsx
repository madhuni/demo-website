/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './error-box.css';

const uppercaseFirstLetter = (value) => {
  return value.charAt(0).toUpperCase() + value.substr(1);
};

const errorBox = (props) => {
  const errorMsg = props.errorMsg;
  const errorMsgs = [];
  for (const key in errorMsg) {
    if (errorMsg.hasOwnProperty(key)) {
      errorMsgs.push(
        // <li className="error-msg" key={key}>*{key.split('_').join(' ') + ': ' + errorMsg[key]}</li>
        <li className="error-msg" key={key}>
          <span className="field-name">*{uppercaseFirstLetter(key.split('_').join(' ')) + ': '}</span>
          <span className="field-error-msg">{errorMsg[key]}</span>
        </li>
      );
    }
  }
  return (
    <ul className="error-box">
      {errorMsgs}
    </ul>
  );
};

export default errorBox;