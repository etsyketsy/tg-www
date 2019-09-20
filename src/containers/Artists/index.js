import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';


class Artist extends Component {
  state = {
    showInfo: false
}
clickHandler = event => {
  this.setState({
    showInfo: !this.state.showInfo
  })
}

  render() {
    return (
      (this.state.showInfo) ?

      <div className="artist"
        onClick={this.clickHandler}
        id={this.props.artist.artist}
      >
          <div>Picture coming</div>
      </div>
    :
    <div className="artist"
        onClick={this.clickHandler}
        id={this.props.artist.artist}
      >
          <div>{this.props.artist.artist}</div>
      </div>
    )
  }

}

class Artists extends Component {

  state = {
    artistsToRender: 2
  }

  loadMoreHandler = () => {
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
            releaseData.slice(0, this.state.artistsToRender).map(
              (artist, index) => {
                return (
                  <Artist artist={artist} key={index}/>
                )
              }
            )
          }
        </div>
        {
          (releaseData.length > this.state.artistsToRender) ?
            <button className="loadMore" 
              id="loadArtists" 
              onClick={this.loadMoreHandler}
            >
              Load more...
            </button>
            : null
        }
      </div>

    )
  }
}

export default Artists;