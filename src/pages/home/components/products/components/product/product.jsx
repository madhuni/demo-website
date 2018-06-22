
/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import './product.css';

const product = (props) => {
  return (
    <div className="product">
      <NavLink to={props.url} className="flex-column">
        <div className="product-img-container">
          <img className="product-img" src={props.imgUrl} alt={props.name} width={props.width}/>
        </div>
        <div className="product-detail-container flex-column">
          <div className="subtitle">
            <span>{props.name}</span>
          </div>
          <p>{props.description}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default product;