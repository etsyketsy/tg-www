import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Releases from '../Releases/index.js';
import Artists from '../Artists/index.js';
import News from '../News/index.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import './index.css';


class Home extends Component {

  render () {
    return (
      <div className="app">
        <Header />
        <Sidebar />
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