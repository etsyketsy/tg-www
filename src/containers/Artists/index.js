import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';


<<<<<<< HEAD
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
=======
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

>>>>>>> 68e7993... WIP: Working on connecting Frontend to API
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

<<<<<<< HEAD
=======
  componentDidMount() {
    fetch('http://localhost:8000/backend/api/artist/')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { artists: data }
        )
      })
  }
>>>>>>> 68e7993... WIP: Working on connecting Frontend to API

  render() {
    return (
      this.state.artists.length ?
        <div className="content" id="artists">
          <div className="sectionHeader">Artists</div>
          <div className="displayGrid">
            {
              this.state.artists.slice(0, this.state.artistsToRender).map(
                (artist, index) => {
                  return (
                    <Artist artist={artist} key={index} />
                  )
                }
              )
            }
          </div>
          {
<<<<<<< HEAD
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
=======
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
        :
        <h1>loading...</h1>
>>>>>>> 68e7993... WIP: Working on connecting Frontend to API

    )
  }
}

export default Artists;