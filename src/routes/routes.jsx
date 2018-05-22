/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/home/home';
import Halo from '../pages/products/ethereal-halo/ethereal-halo';
import Ray from '../pages/products/ethereal-ray/ethereal-ray';
import Pentagram from '../pages/products/ethereal-pentagram/ethereal-pentagram';
import About from '../pages/about/about';
import Media from '../pages/media/media';
import Blogs from '../pages/blogs/blogs';
import Login from '../pages/login/login';
import ErrorPage from '../pages/error-page/error-page';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path="/error-page" component={ErrorPage} />
        <Route path="/about" component={About} />
        <Route path="/media" component={Media} />
        <Route path="/login" component={Login} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/products/halo" component={Halo} />
        <Route path="/products/ray" component={Ray} />
        <Route path="/products/pentagram" component={Pentagram} />
        <Route path="/" exact component={Home} />
        <Redirect to="/error-page" />
      </Switch>
    );
  }
}

export default Routes;