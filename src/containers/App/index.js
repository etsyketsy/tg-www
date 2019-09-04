import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/logo.gif';
import TG040 from '../../assets/albumArt/TG040.jpg';
import TG041 from '../../assets/albumArt/TG041.jpg';
import TG042 from '../../assets/albumArt/TG042.jpg';
import TG043 from '../../assets/albumArt/TG043.jpg';

const releases = [
  {name: 'Self-Titled', releaseNumber: 'TG040', artist: 'Frail Hands', id:1, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG043', artist: 'Heavy Heavy Low Low', id:2, img:TG043},
  {name: 'Hourglass', releaseNumber: 'TG042', artist: 'Ghost Spirit', id:2, img:TG042},
  {name: '2020', releaseNumber: 'TG041', artist: 'Shin Guard', id:2, img:TG041},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveLowLow', id:2, img:TG043},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeavyLowLow', id:2, img:TG043},
]

class Header extends Component {

  render() {
    return (
      <div className="header">
          <img src={logo} alt="Logo" id="logo"/>
          <div id="navLinks">
            <div>NEWS</div>
            <div>RELEASES</div>
            <div>ARTISTS</div>
            <div>AUDIO</div>
            <div>ABOUT</div>
            <div>STORE</div>
          </div>
      </div>
    );
  }
}


class News extends Component {

  render() {
    return (
      <div className="content" id="news">
        <div className="sectionHeader">News</div>
        <div className="freeText">newsnewsnewsnewsnewsnewsnewsnews</div>
      </div>
    )
  }
}

class Artists extends Component {

  render() {
    return (
      <div className="content" id="artists">
        <div className="sectionHeader">Artists</div>
        <div className="artistDisplay">artists go here...</div>
      </div>
    )
  }
}

class About extends Component {

  render() {
    return (
      <div className="content" id="about">
        <div className="sectionHeader">About TG</div>
        <div className="aboutDisplay">about info here...</div>
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

const Release = props => {
  return (
    <div className="release" 
      onMouseOver={props.onMouseOver} 
      id={props.release.releaseNumber}
    >
        <img src={props.release.img} className="cover" alt= {props.release.name}/>
        <div className="description">
          <div>{props.release.name}</div>
          <div>by {props.release.artist}</div>
        </div>
    </div>  
  )
}



class Releases extends Component {
  state = {
    item: ''
  }

  // function detecting mouse movements
  hoverHandler = event => {
    console.log(event.currentTarget.id)
    this.setState({
      item: event.currentTarget.releaseNumber,
      active: true,
    })
  }

  render() {
    return (
      <div className="content" id="releases">
        <div className="sectionHeader">Releases</div>
        <div className="releaseDisplay">
          { releases.map((release, index, hoverHandler) => {
            return (
              <Release release={release}  key={index} onMouseOver={this.hoverHandler}/>
            )
          })}
        </div>
      </div>
      
    )
  }
}


class App extends Component {

  render () {
    return (
      <div className="app">
        <Header />
        <News />
        <Releases />
        <Artists />
        <About />
        <Contact />>

      </div>
    )
  }
}

export default App;
