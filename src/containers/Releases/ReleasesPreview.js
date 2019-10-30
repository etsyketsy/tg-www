import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Release from '../Release';


class ReleasesPreview extends Component {

    state = {
        itemsToRender: 4,
    }

    // onComponentDidMount() {
    //     fetch('http://localhost:8000/backend/api/release/')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState(
    //         { releases: data }
    //       )
    //     })
    // }


    render() {
        return (

            <div className="content" id="releasePreview">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        this.props.releases.slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                return (
                                    <Release
                                        className="release"
                                        item={release}
                                        key={index}
                                    />
                                )
                            }
                        )
                    }
                </div>
                <Link to="releases">ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasesPreview;