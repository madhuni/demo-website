import React from 'react';
import { NavLink } from 'react-router-dom';

import './logo.css';

const logo = (props) => {
  return (
    <div className="logo-container flex-row" id={props.id}>
      <NavLink to='/home'>
        <img src={props.url} alt="Company Logo" className="logo" width={props.width} height={props.height}/>
      </NavLink>
    </div>
  );
};

export default logo;