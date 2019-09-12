import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.gif';
import './index.css';


class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
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

export default Sidebar;