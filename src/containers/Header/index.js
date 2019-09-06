import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.gif';


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <img src={logo} alt="Logo" id="logo" />
        <div id="navLinks">
          <Link to="news">NEWS</Link>
          <Link to="releases">RELEASES</Link>
          <Link to="artists">ARTISTS</Link>
          <Link to="audio">AUDIO</Link>
          <Link to="about">ABOUT</Link>
          <Link to="store">STORE</Link>
        </div>
      </div>
    );
  }
}

export default Header;