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

  state = {
    artistsToRender: 8
  }

  // function detecting mouse movements
  hoverHandler = event => {
    console.log(event.currentTarget.id)
    this.setState({
      item: event.currentTarget.artist,
      active: true,
    })
  }

  loadMoreHandler = event => {
    this.setState({
      artistsToRender: (this.state.artistsToRender + 4)
    })
  }


  render() {
    return (
      <div className="content" id="artists">
        <div className="sectionHeader">Artists</div>
        <div className="displayGrid">
          {
            releaseData.slice(0, this.state.artistsToRender).map((artist, index, hoverHandler) => {
              return (
                <Artist artist={artist} key={index} onMouseOver={this.hoverHandler} />
              )
            })
          }
        </div>
        {
          (releaseData.length > this.state.artistsToRender) ?
            <button className="loadMore" id="loadArtists" onClick={this.loadMoreHandler}>Load more...</button>
            : null
        }
      </div>

    )
  }
}

export default Artists;