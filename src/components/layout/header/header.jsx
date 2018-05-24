import React from 'react';

import './header.css';

import Logo from '../logo/logo';
import NavBar from '../nav-bar/nav-bar';
import Hamburger from './hamburger/hamburger';

import logoWhite from '../../../assets/images/logo/logo-white.svg';

const header = (props) => {
  return (
    <header className="header">
      <div className="container flex-row header-container">
        <Hamburger {...props} />
        <Logo url={logoWhite} width={40} height={40} id={"header-logo"}/>
        <NavBar {...props}/>
      </div>
    </header>
  );
};

export default header;