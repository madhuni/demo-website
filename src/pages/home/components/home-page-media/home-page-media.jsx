/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './home-page-media.css';
import HomePageMediaItem from  './components/home-page-media-item/home-page-media-item';
import NavBtn from '../../../../components/ui/nav-btn/nav-btn';

import mediaLinks from './media-links';

const homePageMedia = (props) => {
  const homePageMediaItems = mediaLinks.map((item) => {
    return (
      <HomePageMediaItem key={item.id} url={item.url} />
    );
  });

  return (
    <div className="home-page-media-container three-col-layout">
      {homePageMediaItems}
      <NavBtn url={'media'} classValue={'btn--blue'}>Know More</NavBtn>
    </div>
  );
};

export default homePageMedia;