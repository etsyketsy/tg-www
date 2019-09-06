import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/';
import './index.css';
import logo from '../../assets/logo.gif';
import 	TG001	from	'../../assets/albumArt/TG-001.jpg';
import 	TG002	from	'../../assets/albumArt/TG-002.jpg';
import 	TG003	from	'../../assets/albumArt/TG-003.jpg';
import 	TG004	from	'../../assets/albumArt/TG-004.jpg';
import 	TG005	from	'../../assets/albumArt/TG-005.jpg';
import 	TG006	from	'../../assets/albumArt/TG-006.jpg';
import 	TG007	from	'../../assets/albumArt/TG-007.jpg';
import 	TG008	from	'../../assets/albumArt/TG-008.jpg';
import 	TG009	from	'../../assets/albumArt/TG-009.jpg';
import 	TG010	from	'../../assets/albumArt/TG-010.jpg';
import 	TG011	from	'../../assets/albumArt/TG-011.jpg';
import 	TG012	from	'../../assets/albumArt/TG-012.jpg';
import 	TG013	from	'../../assets/albumArt/TG-013.jpg';
import 	TG014	from	'../../assets/albumArt/TG-014.jpg';
import 	TG015	from	'../../assets/albumArt/TG-015.jpg';
import 	TG016	from	'../../assets/albumArt/TG-016.jpg';
import 	TG017	from	'../../assets/albumArt/TG-017.jpg';
import 	TG018	from	'../../assets/albumArt/TG-018.jpg';
import 	TG019	from	'../../assets/albumArt/TG-019.jpg';
import 	TG020	from	'../../assets/albumArt/TG-020.jpg';
import 	TG021	from	'../../assets/albumArt/TG-021.jpg';
import 	TG022	from	'../../assets/albumArt/TG-022.jpg';
import 	TG023	from	'../../assets/albumArt/TG-023.jpg';
import 	TG024	from	'../../assets/albumArt/TG-024.jpg';
import 	TG025	from	'../../assets/albumArt/TG-025.jpg';
import 	TG026	from	'../../assets/albumArt/TG-026.jpg';
import 	TG027	from	'../../assets/albumArt/TG-027.jpg';
import 	TG028	from	'../../assets/albumArt/TG-028.jpg';
import 	TG029	from	'../../assets/albumArt/TG-029.jpg';
import 	TG030	from	'../../assets/albumArt/TG-030.jpg';
import 	TG031	from	'../../assets/albumArt/TG-031.jpg';
import 	TG032	from	'../../assets/albumArt/TG-032.jpg';
import 	TG033	from	'../../assets/albumArt/TG-033.jpg';
import 	TG034	from	'../../assets/albumArt/TG-034.jpg';
import 	TG035	from	'../../assets/albumArt/TG-035.jpg';
import 	TG036	from	'../../assets/albumArt/TG-036.jpg';
import 	TG037	from	'../../assets/albumArt/TG-037.jpg';
import 	TG038	from	'../../assets/albumArt/TG-038.jpg';
import 	TG039	from	'../../assets/albumArt/TG-039.jpg';
import 	TG040	from	'../../assets/albumArt/TG-040.jpg';
import 	TG041	from	'../../assets/albumArt/TG-041.jpg';
import 	TG042	from	'../../assets/albumArt/TG-042.jpg';
import 	TG043	from	'../../assets/albumArt/TG-043.jpg';


const releases = [
  {name: 'Courtside Seats', releaseNumber: 'TG043', artist: 'Heavy Heavy Low Low', img:TG043},
  {name: 'Hourglass', releaseNumber: 'TG042', artist: 'Ghost Spirit', img:TG042},
  {name: '2020', releaseNumber: 'TG041', artist: 'Shin Guard', img:TG041},
  {name: 'Self-Titled', releaseNumber: 'TG040', artist: 'Frail Hands', img: TG040},
  {name: 'Split 12"', releaseNumber: 'TG039', artist: 'Ghost Spirit & Frail Hands', img:TG039},
  {name: 'Duration and Delusion', releaseNumber: 'TG012', artist: 'Nervous', img:TG038},
  {name: 'Heavy Muscle', releaseNumber: 'TG012', artist: 'Power', img:TG037},
  {name: 'Human Performance IV', releaseNumber: 'TG036', artist:'Sabertooth Zombie' , img:TG036},
  {name: 'See You When I See You', releaseNumber: 'TG035', artist:'Youth Funeral' , img:TG035},
  {name: 'Nervous', releaseNumber: 'TG034', artist: 'Nervous' , img:TG034},
  {name: 'The Future Is Bright', releaseNumber:'TG033', artist: 'No Sir', img:TG033},
  {name: 'Bremerton Zoo', releaseNumber:'TG032', artist: 'Power', img:TG032},
  {name: 'Split', releaseNumber:'TG031', artist: 'Another Mistake & Overlooked', img:TG031},
  {name: 'Vesuvius', releaseNumber:'TG030', artist:'Vesuvius', img:TG030},
  {name: 'Human Performance III', releaseNumber:'TG029', artist:'Sabertooth Zombie', img:TG029},
  {name: 'Euphoria', releaseNumber:'TG028', artist:'Daggers', img:TG028},
  {name: 'Fatal Birth', releaseNumber:'TG027', artist:'Fatal Birth', img:TG027},
  {name: 'Decade of Dust', releaseNumber:'TG026', artist:'Hellhorse', img:TG026},
  {name: 'Death Haunts', releaseNumber:'TG025', artist: 'Power', img:TG025},
  {name: 'Human Performance II', releaseNumber:'TG024', artist:'Sabertooth Zombie', img:TG024},
  {name: 'Hospital Bomber', releaseNumber:'TG023', artist: 'Heavy Heavy Low Low', img:TG023},
  {name: 'Human Performance', releaseNumber:'TG022', artist:'Sabertooth Zombie', img:TG022},
  {name: 'Throats', releaseNumber:'TG021', artist:'Throats', img:TG021},
  {name: '...And Your Fathers Are Dead In The Ground', releaseNumber:'TG020', artist:'Sabertooth Zombie', img:TG020},
  {name: 'Ghost Town Anthems', releaseNumber:'TG019', artist:"Black Teeth", img:TG019},
  {name: 'Purple Mercy', releaseNumber:'TG018', artist:'Purple Mercy', img:TG018},
  {name: 'Hell and Reason', releaseNumber:'TG017', artist:'Hell and Reason', img:TG017},
  {name: 'Midnight Sessions', releaseNumber:'TG016', artist:'Sabertooth Zombie', img:TG016},
  {name: 'Mere Bears: The Riot Cops Bathed On Zion', releaseNumber:'TG015', artist: 'Sabertooth Zombie', img:TG015},
  {name: 'Dent Face', releaseNumber:'TG014', artist: 'Sabertooth Zombie', img:TG014},
  {name: 'Dance/The Prisoner', releaseNumber:'TG013', artist:'Sabertooth Zombie', img:TG013},
  {name: 'Molotov Solution', releaseNumber:'TG012', artist:'Molotov Solution', img:TG012},
  {name: 'Entrepreneur', releaseNumber:'TG011', artist: 'Dead Will Rise', img:TG011},
  {name: 'Chained To The Lake', releaseNumber:'TG010', artist: 'These Days', img:TG010},
  {name: 'Unanimity And The Cessation of Hostility', releaseNumber:'TG009', artist: 'Misericordiam', img:TG009},
  {name: 'Midngiht Venom', releaseNumber:'TG008', artist: 'Sabertooth Zombie', img:TG008},
  {name: 'Split', releaseNumber:'TG007', artist: 'Molotov Solution & War From A Harlots Mouth', img:TG007},
  {name: 'The Kind Is Dead', releaseNumber:'TG006', artist: 'Hoods', img:TG006},
  {name: 'Live Your Heart And Never Follow', releaseNumber:'TG005', artist: 'Set It Straight', img:TG005},
  {name: 'Split', releaseNumber:'TG004', artist: 'Countdown & Tiefighter', img:TG004},
  {name: 'Split', releaseNumber:'TG003', artist: 'Set It Straight & Eagles Dare', img:TG003},
  {name: 'We Play For Keeps', releaseNumber:'TG002', artist: 'Yourlastbreath', img:TG002},
  {name: 'Courtside Seats', releaseNumber:'TG001', artist: 'Heavy Heavy Low Low', img: TG001},
]


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

const Artist = props => {
  return (
    <div className="artist" 
      onMouseOver={props.onMouseOver}
      id={props.artist.artist}
    >
      <div className="description">
        <div>{props.artist.artist}</div>
      </div>
    </div>  
  )
}

class Artists extends Component {

    // function detecting mouse movements
    hoverHandler = event => {
      console.log(event.currentTarget.id)
      this.setState({
        item: event.currentTarget.artist,
        active: true,
      })
    }
  
    render() {
      return (
        <div className="content" id="artists">
          <div className="sectionHeader">Artists</div>
          <div className="displayGrid">
            { releases.map((artist, index, hoverHandler) => {
              return (
                <Artist artist={artist}  key={index} onMouseOver={this.hoverHandler}/>
              )
            })}
          </div>
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

const Release = props => {
  return (
    <div className="release" 
      onMouseOver={props.onMouseOver} 
      id={props.release.releaseNumber}
    >
        <img src={props.release.img} className="cover" alt= {props.release.name}/>
        <div className="description">
          <div>{props.release.name}</div>
          <div>{props.release.artist}</div>
        </div>
    </div>  
  )
}



class Releases extends Component {

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
        <div className="displayGrid">
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
export { Home, News, Releases, Artists, About };