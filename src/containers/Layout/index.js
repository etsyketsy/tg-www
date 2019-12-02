import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo2 from '../../assets/logo2.jpg';
import Header from '../Header';
import './index.css';


class Layout extends Component {

  render() {
    return (
      <div id="layout">
        
 
        <div id="navLinks">
        <div id="logo">
                <Link to="/" replace id="logoWrapper">
                    <img src={logo2} alt="Logo" id="logo" />
                </Link>
            </div>
          <NavLink to="/" activeClassName="active" exact replace>
            <div className='text'>HOME</div>
          </NavLink>
          <NavLink to="/news" activeClassName="active" exact replace>
            <div className='text'>NEWS</div>
          </NavLink>
          <NavLink to="/releases" activeClassName="active" replace>
            <div className='text'>RELEASES</div>
          </NavLink>
          <NavLink to="/artists" activeClassName="active" replace>
            <div className='text'>ARTISTS</div>
          </NavLink>
          <a href="https://music.tgrex.com/" target="_blank" rel="noopener noreferrer">AUDIO</a>
          <NavLink to="/about" activeClassName="active" replace>
            <div className='text'>ABOUT</div>
          </NavLink>
          <a href="https://deathwishinc.com/collections/twelve-gauge"
            target="_blank" rel="noopener noreferrer">STORE</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;