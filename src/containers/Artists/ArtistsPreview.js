import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Artist from '../Artist/index.js';
import artistData from'../../assets/artistData.js';

class ArtistsPreview extends Component {

    state = {
        itemsToRender: 4,
        artists: null
    }

    componentDidMount() {
        this.setState(
            { artists: artistData }
          )
    }


    render() {
        return (
            (!this.state.artists) ?
                <div></div>
                :
                <div className="preview" id="artistPreview">
                    <div className="sectionHeader">Artists</div>
                    <div className="displayGrid">
                        {
                            this.state.artists.slice(0, this.state.itemsToRender).map(
                                (artist, index) => {

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
                            )
                        }
                    </div>
                    <Link to="/artists" replace>ALL ARTIST</Link>
                </div>
        )
    }
}

export default ArtistsPreview;