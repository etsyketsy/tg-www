import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Artist from '../Artist/index.js';


class Artists extends Component {

  state = {
    artists: null
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/artists/')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { artists: data }
        )
      })
  }

  render() {

    return (
      // Check for artist data in state
      (!this.state.artists) ?
      <p id='loading'>loading...</p>
        :
        <div className="content" id="artists">
          <div className="sectionHeader">Artists</div>
          <div className="displayGrid">
            {
            this.state.artists.map(
                  (artist, index) => {
                    // List only artists, not affiliates
                    if (artist.artist_type === 'artist') {
                      return (
                        <Link to={{
                          pathname: `/artists/${artist.artist_nice_name}/`,
                          state: { artist }
                        }}
                          key={index}
                        >
                          <Artist
                            item={artist}
                            key={index}
                            id={index}
                          />
                        </Link >
                      )
                    }
                    else return null;
                  }
                )
            }
          </div>
        </div>
    )
  }
}

export default withRouter(Artists);
