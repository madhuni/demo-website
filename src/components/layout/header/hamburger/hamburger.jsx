import React from 'react';

import './hamburger.css';

const hamburger = (props) => {
  const classes = ['hamburger-container'];
  if (props.openNavBar) {
    classes.push('hamburger-container--close-x');
  }
  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      <div className="hamburger"></div>
    </div>
  );
};

export default hamburger;