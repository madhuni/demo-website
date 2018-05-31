/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './team-item.css';

const teamItem = (props) => {
  return (
    <div className="team-item">
      <div className="member-img-container flex-row">
        <img src={props.item.photo} alt="Profile pic" width="200" height="200" />
      </div>
      <div className="member-details">
        <div className="member-name">
          <p>{props.item.name}</p>
        </div>
        <div className="member-designation">
          <p>{props.item.designation}</p>
        </div>
        <div className="member-email">
          <p>
            <a href={`mailto:${props.item.email}`} target="_top">{props.item.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default teamItem;