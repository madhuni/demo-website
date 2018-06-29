/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import LazyLoad from 'react-lazyload';

import './team.css';

import TeamItem from './components/team-item/team-item';
import TeamLoader from './components/team-loader/team-loader';

const team = (props) => {
  let teamLoader = [];
  
  const team = props.team.map(item => {
    return (
      <LazyLoad height={200} offset={100} placeholder={<TeamLoader />} once>
        <TeamItem key={item.name + item.designation} item={item}/>
      </LazyLoad>
    );
  });

  for (let i = 0; i < 3; i++) {
    teamLoader.push(
      <TeamLoader key={i + '_loader'} />
    );
  }

  return (
    <div className="team-container four-col-layout">
      {
        team.length > 0 ?
        team :
        (props.loading ? teamLoader : null)
      }
    </div>
  );
};

export default team;