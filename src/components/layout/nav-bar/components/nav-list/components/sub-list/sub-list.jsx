import React from 'react';

import './sub-list.css';

const subList = (props) => {
  const classes = ['sub-list-container'];
  if (props.type === 'left') {
    classes.push('sub-list-container--left');
  } else {
    classes.push('sub-list-container--right');
  }

  return (
    <div className={classes.join(' ')} id={props.id}>
      <ul className="sub-list">
        {props.children}
      </ul>
    </div>
  );
};

export default subList;