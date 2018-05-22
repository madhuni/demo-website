import React from 'react';

import './nav-bar.css';

import NavList from './components/nav-list/nav-list';

const navBar = (props) => {
  const classes = ['nav-bar'];
  if (props.openNavBar) {
    classes.push('nav-bar--open');
  }
  return (
    <nav className={classes.join(' ')}>
      <NavList {...props} />
    </nav>
  );
};

export default navBar;