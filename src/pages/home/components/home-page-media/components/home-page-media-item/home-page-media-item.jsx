/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './home-page-media-item.css';

const homePageMediaItem = (props) => {
  return (
    <div className="home-page-media-item">
      <a href={props.url} target="_blank">
        <img src={props.imgUrl} alt="Media Image" width="300"/>
      </a>
    </div>
  );
};

export default homePageMediaItem;