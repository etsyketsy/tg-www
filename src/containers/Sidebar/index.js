import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../assets/logo.gif';
import logo2 from '../../assets/logo2.jpg';
import './index.css';


class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div id="navLinks">
          <img src={logo2} alt="Logo" id="logo" />
          <Link to="/" replace>HOME</Link>
          <Link to="/news" replace>NEWS</Link>
          <Link to="/releases" replace>RELEASES</Link>
          <Link to="/artists" replace>ARTISTS</Link>
          <Link to="/audio" replace>AUDIO</Link>
          <Link to="/about" replace>ABOUT</Link>
          <Link to="/store" replace>STORE</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;