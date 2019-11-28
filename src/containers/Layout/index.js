import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import logo from '../../assets/logo.gif';
import Header from '../Header';
import NavLinks from '../NavLinks';
import './index.css';


class Layout extends Component {
  state = {

  }

  checkWindow(id) {
    console.log(id)
    return (window.location.pathname === id) ? 'active' : console.log(id);

  }



  render() {
    return (
      <div className="layout">
        <Header ></Header>
 
        <div id="navLinks">
          
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
          <a href="https://music.tgrex.com/" target="_blank">AUDIO</a>
          <NavLink to="/about" activeClassName="active" replace>
            <div className='text'>ABOUT</div>
          </NavLink>
          <a href="https://deathwishinc.com/collections/twelve-gauge"
            target="_blank">STORE</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;