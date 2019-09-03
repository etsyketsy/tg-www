import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/logo.gif';
import TG040 from '../../assets/TG040.jpg'
import { release } from 'os';


const releases = [
  {name: 'Self-Titled', releaseNumber: 'TG040', artist: 'Frail Hands', id:1, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
  {name: 'Courtside Seats', releaseNumber: 'TG012', artist: 'HeavyHeaveyLowLow', id:2, img:TG040},
]

// class Release extends Component {
//   render() {
//     return (
//       <div className="release" id={release.releaseNumber}>
//       </div>
//     )
//   }
// }

class ReleaseDisplay extends Component {
  render() {
    return (
      <div className="releaseDisplay">
        { releases.map(release => {
            return <img src={release.img} className="release" key={release.releaseNumber}/>
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
