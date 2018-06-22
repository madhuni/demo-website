/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './home-page-media-item.css';

const homePageMediaItem = (props) => {
  return (
    <div className="home-page-media-item">
      <a href={props.url}>
        <img src="https://via.placeholder.com/300x100" alt="Media Image"/>
      </a>
    </div>
  );
};

export default homePageMediaItem;