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
            <div id="news">NEWS</div>
            <div id="news">RELEASES</div>
            <div id="news">ARTISTS</div>
            <div id="news">AUDIO</div>
            <div id="about">ABOUT</div>
            <div id="store">STORE</div>
          </div>
      </div>
    );
  }
}


class News extends Component {

  render() {
    return (
      <div className="news">
        <div className="sectionHeader">News</div>
        <div className="freeText">newsnewsnewsnewsnewsnewsnewsnews</div>
      </div>
    )
  }
}


// const todoItem = props => {
//   return (
//       <li className={props.todo.completed ? 'TodoItem-completed' : ''}
//           onClick={() => props.markCompleted(props.todo.id)}>
//           {
//               props.todo.item
//           }
//       </li>
//   )
// }

// export default todoItem
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
      <div id="Releases">
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
        <Releases/>

      </div>
    )
  }
}

export default App;
