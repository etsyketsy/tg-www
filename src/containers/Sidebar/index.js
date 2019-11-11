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
          <a href="https://music.tgrex.com/" target="_blank">AUDIO</a>
          <Link to="/about" replace>ABOUT</Link>
          <a href="https://deathwishinc.com/collections/twelve-gauge" 
            target="_blank">STORE</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Sidebar;