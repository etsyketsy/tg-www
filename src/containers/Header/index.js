import React, { Component } from 'react';
import logo from '../../assets/logo.gif';


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <img src={logo} alt="Logo" id="logo" />
        <div id="navLinks">
          <a id="news">NEWS</a>
          <a id="about">ABOUT</a>
          <a id="store">STORE</a>
        </div>
      </div>
    );
  }
}

export default Header;