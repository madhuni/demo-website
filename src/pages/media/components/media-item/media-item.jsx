/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './media-item.css';

import calendarIcon from '../../assets/images/calendar-icon.svg';
import publisherIcon from '../../assets/images/publisher-icon.svg';

const mediaItem = (props) => {
  const imgContainerStyle = {
    backgroundImage: `url(${props.item.thumbnail})`
  };

  return (
    <div className="media-item flex-row">
      <div className="media-image-container">
        <img src={props.item.thumbnail} alt="Media"/>
      </div>
      <div className="media-details-container">
        <div className="media-title subtitle">
          <span>{props.item.title}</span>
        </div>
        <div className="media-date-publisher flex-row">
          <span className="media-publisher">
            <img src={publisherIcon} alt="Publisher" width="16" height="16" className="icon"/>
            {props.item.publisher}
          </span>
          {/* <span className="media-date">
            <img src={calendarIcon} alt="Calendar" width="16" height="16" className="icon"/>
            <span>Published On:</span>ssf
            <span>{props.item.published_at}</span>
          </span> */}
        </div>
        <div className="media-description">{props.item.description}</div>
        <div className="media-link">
          <a href={props.item.link} target="_blank">View More</a>
        </div>
      </div>
    </div>
  );
};

export default mediaItem;