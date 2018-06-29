/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import BlogsPage from './components/blogs-page/blogs-page';

import './blogs.css';

import Blog1 from './components/blog/blog_1/blog_1';
import Blog2 from './components/blog/blog_2/blog_2';

class Blogs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={`${this.props.match.path}/:id`} exact render={(props) => {
            if (props.match.params.id === 'blog_1') {
              return (<Blog1/>);
            } else if (props.match.params.id === 'blog_2') {
              return (<Blog2/>);
            }
          }}/>
          <Route path={this.props.match.path} exact render={(props) =>
            <BlogsPage {...props}/>
          }/>
          <Redirect to='/error-page' exact/>
        </Switch>
      </React.Fragment>
    );
  }
}
    
export default Blogs;