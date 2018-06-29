/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import calendarIcon from '../../../../assets/images/calendar-icon.svg';

import './blog-item.css';

const blogItem = (props) => {
  return (
    <div className="blog-item">
      <NavLink to={`${props.match.url}/${props.url}`} exact>
        <div className="blog-img-container">
          <img src={props.imgUrl} alt="Blog Item" width="400" height="300"/>
        </div>
        <div className="blog-details-container">
          <div className="blog-title subtitle">
            <span>{props.title}</span>
          </div>
          <div className="blog-date flex-row">
            <img src={calendarIcon} alt="Calender" width="16" height="16" className="icon"/>
            <span>Published On:</span>
            <span>{props.date}</span>
          </div>
          <div className="blog-link">
            {/* <NavLink to={`${props.match.url}/${props.url}`} exact>Read More</NavLink> */}
            <p>Read More</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default blogItem;