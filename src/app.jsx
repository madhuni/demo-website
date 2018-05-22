import React, { Component } from 'react';

// Importing CSS for the App.jsx file
import './app.css';

// Importing Components used in App.jsx
import Header from './components/layout/header/header';

class App extends Component {
  state = {
    openNavBar: false
  };

  toggleNavBar = () => {
    // console.log('hamburger is clicked');
    if (this.state.openNavBar) {
      this.setState({
        openNavBar: false
      });
    } else {
      this.setState({
        openNavBar: true
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header clicked={this.toggleNavBar} openNavBar={this.state.openNavBar} />
      </div>
    );
  }
}

export default App;