/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';

import loader from '../assets/images/loader/loader.gif';

const Loading = () => {
  return (
    <div className="page">
      <div className="page-loader u-text-center">
        <img src={loader} alt="Loader" height="100"/>
        <p className="u-text-center">LOADING...</p>
      </div>
    </div>
  );
};

const Home = Loadable({
  loader: () => import('../pages/home/home'),
  loading: Loading
});
const Halo = Loadable({
  loader: () => import('../pages/products/ethereal-halo/ethereal-halo.jsx'),
  loading: Loading
});
const Ray = Loadable({
  loader: () => import('../pages/products/ethereal-ray/ethereal-ray.jsx'),
  loading: Loading
});
const Pentagram = Loadable({
  loader: () => import('../pages/products/ethereal-pentagram/ethereal-pentagram.jsx'),
  loading: Loading
});
const About = Loadable({
  loader: () => import('../pages/about/about'),
  loading: Loading
});
const Media = Loadable({
  loader: () => import('../pages/media/media'),
  loading: Loading
});
const Careers = Loadable({
  loader: () => import('../pages/careers/careers'),
  loading: Loading
});
const ContactUs = Loadable({
  loader: () => import('../pages/contact-us/contact-us'),
  loading: Loading
});
const Blogs = Loadable({
  loader: () => import('../pages/blogs/blogs'),
  loading: Loading
});
const Login = Loadable({
  loader: () => import('../pages/login/login'),
  loading: Loading
});
const ErrorPage = Loadable({
  loader: () => import('../pages/error-page/error-page'),
  loading: Loading
});

class Routes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <Route path="/contact" component={ContactUs} />
        <Route path="/careers" component={Careers} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Redirect to="/error-page" />
      </Switch>
    );
  }
}

export default Routes;