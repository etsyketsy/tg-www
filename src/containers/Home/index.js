import React, { Component } from 'react';
import Header from '../Header/';
import Releases from '../Releases/index.js';
import Artists from '../Artists/index.js';
import './index.css';


class News extends Component {

  render() {
    return (
      <div className="content" id="news">
        <div className="sectionHeader">News</div>
        <div className="freeText">newsfromtumblrnewsfromtumblrnewsfromtumblrnewsfromtumblrnewsfromtumblr</div>
      </div>
    )
  }
}



class About extends Component {

  render() {
    return (
      <div className="content" id="about">
        <div className="sectionHeader">About TG</div>
        <div className="aboutDisplay">
        Twelve Gauge Records is an independent record label operating out of San Fransico, CA with a rich roster of hardcore and metal artists like Sabertooth Zombie, Power, Heavy Heavy Low Low, and others.
        <br></br><br></br>
        The label was founded in 2004 with it's first release, Courtside Seats EP by Heavy Heavy Low Low, out in early 2005. Since then, over 20 artists put together a discography of over 30 releases mostly pressed on vinyl only.
        <br></br><br></br>
        No two releases will sound alike as no effort is put into following a specific template or routine. This is a DIY effort with a strong passion for the music and the scene.
        <br></br><br></br>
        Twelve Gauge Records is exclusively distributed by <a href="http://deathwishdirect.com">Deathwish Direct</a>.
        </div>
      </div>
    )
  }
}


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
export {Home, News, About}