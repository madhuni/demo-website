/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';

import NavBtn from '../../components/ui/nav-btn/nav-btn';

import './error-page.css';

class ErrorPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page--error-page">
        <section className="section section--404">
          <div className="container">
            <div className="content">
              <h1 className="primary-heading u-text-center">
                <span className="primary-heading--main">404</span>
                <span className="primary-heading--sub">Oops, Sorry we can't find that page!</span>
              </h1>
              <NavBtn url={'home'} classValue={'btn--blue'}>Go to Home</NavBtn>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ErrorPage;