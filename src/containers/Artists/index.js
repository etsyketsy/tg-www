import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';


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
              { releaseData.map((artist, index, hoverHandler) => {
                return (
                  <Artist artist={artist}  key={index} onMouseOver={this.hoverHandler}/>
                )
              })}
            </div>
          </div>
          
        )
      }
  }

  export default Artists;