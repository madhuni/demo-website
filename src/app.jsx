/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 * __language__ = Javascript
 * __encoding__ = UTF-8
 */

// importing React and related dependencies
import React, { Component } from 'react';

// Importing CSS for the App.jsx file
import './app.css';

// Importing Components used in App.jsx
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Routes from './routes/routes';

class App extends Component {
  state = {
    openNavBar: false
  };

  /* This function will toggle the nav-bar (close/open) */
  toggleNavBar = () => {
    if (this.state.openNavBar) {
      this.setState({
        ...this.state,
        openNavBar: false
      });
    } else {
      this.setState({
        ...this.state,
        openNavBar: true
      });
    }
  }

  /* This function will be called whenever a nav-link will be clicked */
  closeNavBar = () => {
    console.log('closeNavBar is called');
    this.setState({
      openNavBar: false,
    });
  }

  render() {
    return (
      <div className="app">
        <Header clicked={this.toggleNavBar} openNavBar={this.state.openNavBar} closeNavBar={this.closeNavBar} closeSubList={this.state.closeSubList}/>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;