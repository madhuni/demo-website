import React from 'react';

import './sub-list-item.css';

const subListItem = (props) => {
  return (
    <li className="sub-list-item">
      <a href={props.link}>
        <img src={props.url} alt="Item" className="item-image" width={props.width} height={props.height}/>
        <span className="sub-item-detail">
            {props.children}
        </span>
      </a>
    </li>
  );
};

export default subListItem;