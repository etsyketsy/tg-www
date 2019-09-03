import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/logo.gif';



class Release extends Component {
  render() {
    return (
      <div className="Release">

      </div>
    )
  }
}

class Header extends Component {

  render() {
    return (
      <div className="Header">
          <img src={logo} alt="Logo" id="logo"/>
          <div id="navLinks">
            <a id="news">NEWS</a>
            <a id="about">ABOUT</a>
            <a id="store">STORE</a>
          </div>
      </div>
    );
  }
}

class App extends Component {


  render () {
    return (
      <div className="App">
        <div className="header"><Header /></div>
      </div>
    )
  }
}

export default App;
