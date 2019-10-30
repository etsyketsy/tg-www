import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Artist from '../Artist/index.js';
import ArtistSlide from '../ArtistSlide/index.js';
import ArtistsPreview from './ArtistsPreview.js';


class Artists extends Component {

  state = {
    currentIndex: null
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
      
      (!this.state.artists) ?
      <h1>&#8635;</h1>
      :
        <div className="content" id="artists">
          <div className="sectionHeader">Artists</div>
          <div className="displayGrid">
            {
                (window.location.pathname === '/artists') ?
                  this.state.artists.map(
                    (artist, index) => {

                      return (
                        <Link to={{
                            pathname: `/artists/${artist.artist_nice_name}/`,
                            state: {artist}
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
                  )
              :
                  <ArtistsPreview 
                  artists={this.state.artists}
                  />
            }
            </div>
          </div> 
    )
  }
}

export default withRouter(Artists);
