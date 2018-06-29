/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
  let item;
  
  if (props.linkType === 'text') {
    item = props.name;
  } else if (props.linkType === 'img') {
    item = <img src={props.img.url} alt={props.img.alt} width={props.img.width} height={props.img.height} className="avatar" />;
  }

  return (
    <li className="nav-item" onClick={props.closeNavBar}>
      <div className="item-name flex-row">
        {
          props.navLink ?
          <NavLink to={props.address} className="item-link">
            {props.name}
          </NavLink> :
          <a href={props.address} className={props.showActive ? 'item-link active' : 'item-link'} type="no-click">{item}</a>
        }
      </div>
      {props.children}
    </li>
  );
};

export default navItem;