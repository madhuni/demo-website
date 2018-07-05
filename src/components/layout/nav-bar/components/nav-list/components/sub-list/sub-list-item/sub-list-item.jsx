import React from 'react';
import { NavLink } from 'react-router-dom';

import './sub-list-item.css';

const subListItem = (props) => {
  return (
    <li className="sub-list-item" onClick={props.closeNavBar}>
      <NavLink to={props.link}>
        {
          props.hasImage ? 
          <img src={props.url} alt="Item" className="item-image" width={props.width} height={props.height}/> :
          null
        }
        <span className="sub-item-detail">
            {props.children}
        </span>
      </NavLink>
    </li>
  );
};

export default subListItem;