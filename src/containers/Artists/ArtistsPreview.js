import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Artist from '../Artist/index.js';

class ArtistsPreview extends Component {

    state = {
        itemsToRender: 4,
    }

    render() {
        return (
            <div className="content" id="artistPreview">
                <div className="displayGrid">
                    {
                        this.props.artists.slice(0, this.state.itemsToRender).map(
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
                    }
                </div>
                <Link to="/artists" replace>ALL ARTIST</Link>
            </div>
        )
    }
}

export default ArtistsPreview;