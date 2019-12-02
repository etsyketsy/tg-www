import React, { Component } from 'react';
import ReleasesPreview from '../ReleasesPreview/index.js';
import ArtistsPreview from '../Artists/ArtistsPreview.js';
import News from '../News/index.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import './index.css';



class Home extends Component {

  render () {
    return (
      <div className="home">
        <News />
        <ReleasesPreview />
        <ArtistsPreview />
        <div id="lastRow">
          <About />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Home;