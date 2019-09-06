import React, { Component } from 'react';
import Header from '../Header/';
import Releases from '../Releases/index.js';
import Artists from '../Artists/index.js';
import News from '../News/index.js';
import About from '../About/index.js';
import './index.css';


class Contact extends Component {

  render() {
    return (
      <div className="content" id="contact">
        <div className="sectionHeader">Contact</div>
        <div className="contactDisplay">
            Management, A&R: <br></br>
            Jihad M. Rabah, jihad@twelvegaugehc.com
            <br></br>
            <br></br>
            Distribution/Wholesale Inquiries: <br></br>
            Deathwish Direct, distro@deathwishinc.com
            <br></br><br></br>
            Online Store Contact: <br></br>
            Jihad M. Rabah, jihad@twelvegaugehc.com
        </div>
      </div>
    )
  }
}


class Home extends Component {

  render () {
    return (
      <div className="app">
        <Header />
        <News />
        <Releases />
        <Artists />
        <div id="lastRow">
          <About />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Home;
export {Home, About}