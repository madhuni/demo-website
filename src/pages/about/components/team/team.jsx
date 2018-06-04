/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './team.css';

import TeamItem from './components/team-item/team-item';
import TeamLoader from './components/team-loader/team-loader';

const team = (props) => {
  let teamLoader = [];
  
  const team = props.team.map(item => {
    return (
      <TeamItem key={item.name + item.designation} item={item}/>
    );
  });

  for (let i = 0; i < 3; i++) {
    teamLoader.push(
      <TeamLoader key={i + '_loader'} />
    );
  }

  return (
    <div className="team-container three-col-layout">
      {
        team.length > 0 ?
        team :
        (props.loading ? teamLoader : null)
      }
    </div>
  );
};

export default team;