import React,    { Component } from 'react';
import './index.css';


// Display Artist Tile for preview and All Artists pages
class Artist extends Component {

    render() {
      return (
          <div id="itemTile">
            <img className='photoPreview' 
              src={this.props.item.image} 
              alt='artistPhoto' />
            <div id='info'>
              <p>{this.props.item.artist}</p>
            </div>
          </div>
      )
    }
  
  }

  export default Artist;