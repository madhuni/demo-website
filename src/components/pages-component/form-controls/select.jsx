/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import FormControl from './components/form-control';

const select = (props) => {
  const options = [];

  for (let i = 0; i < props.options.length; i++) {
    options.push(
      <option value={props.options[i]} key={'option_' + i}>{props.options[i]}</option>
    );
  }

  return (
    <FormControl>
      <label htmlFor={props.inputName}>
        {props.labelName}
        {props.isRequired ? <span className="star">*</span> : null}
      </label>
      <select onChange={props.onInputChange} name={props.inputName} className="input-element" id={props.inputName} required={props.isRequired}>
        <option value="" selected disabled>{props.defaultValue}</option>
        {options}
      </select>
    </FormControl>
  );
};

export default select;