/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

const footerItemList = (props) => {
  return (
    <div className="footer-col-divider" content={props.content}>
      <div className="footer-title">{props.data.title}</div>
      <ul className="links-list">
        <li className="link-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/media">Media</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/careers">Careers</NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default footerItemList;