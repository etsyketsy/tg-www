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
          id={this.props.artist.name}
        >
          <div>Picture coming</div>
        </div>
      :
        <div className="artist"
          onClick={this.clickHandler}
          id={this.props.artist.name}
        >
          <div>{this.props.artist.name}</div>
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

  componentDidMount() {
    fetch('http://localhost:8000/backend/api/artist/')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { artists: data }
        )
      })
  }

  render() {

    return (
      <div className="content" id="artists">
        <div className="sectionHeader">Artists</div>
        <div className="displayGrid">
          {
            (this.state.artists) ?

              this.state.artists.slice(0, this.state.artistsToRender).map(
                (artist, index) => {
                  return (
                    <Artist artist={artist} key={index} />
                  )
                }
              )
            :
              <h1>Loading...</h1>
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
