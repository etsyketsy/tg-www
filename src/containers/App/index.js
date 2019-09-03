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

// class Release extends Component {
//   state = {
//     item: ''
//   }

//   render() {
    
//     <div className="release">

//     </div>
//   }
// }

class ReleaseDisplay extends Component {
  render() {
    return (
      <div className="releaseDisplay">
        { releases.map(release => {
            return (
              <div className="release">
                <img src={release.img} className="cover" key={release.releaseNumber} alt={release.name}/>
                <div className="description">
                  <div>{release.name}</div>
                  <div>by {release.artist}</div>
                </div>
              </div>
            )
        })}
      </div>
    )
  }
}

class Header extends Component {

  render() {
    return (
      <div className="header">
          <img src={logo} alt="Logo" id="logo"/>
          <div id="navLinks">
            <a id="news">NEWS</a>
            <a id="about">ABOUT</a>
            <a id="store">STORE</a>
          </div>
      </div>
    );
  }
}

class App extends Component {


  render () {
    return (
      <div className="app">
        <div className="header"><Header /></div>
        <div className="releaseGrid"><ReleaseDisplay/></div>
      </div>
    )
  }
}

export default App;
