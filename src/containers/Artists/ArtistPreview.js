import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Artist from '../Artist/index.js';

class ArtistPreview extends Component {

    state = {
        itemsToRender: 4,
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
            <div className="content" id="artistPreview">
                <div className="displayGrid">
                    {
                        this.props.artists.slice(0, this.state.itemsToRender).map(
                            (artist, index) => {
                                console.log('in the artist ' + this.props.onClick)
                                return (
                                    <Artist
                                        className="artist"
                                        artist={artist}
                                        key={index}
                                        id={index}
                                        onClick={this.props.clickHandler}
                                    />
                                )
                            }
                        )
                    }
                </div>
                <Link to="artists">ALL ARTIST</Link>
            </div>
        )
    }
}

export default ArtistPreview;