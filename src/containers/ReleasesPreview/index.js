import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Release from '../Release/index.js';


class ReleasesPreview extends Component {

    state = {
        itemsToRender: 4,
        releases: null
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/releases/')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    { releases: data }
                )
            })
    }

    render() {

        return (
            (!this.state.releases) ?
            <div></div>
            :
            <div className="preview" id="releasesPreview">
                 <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        this.state.releases.slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                return (
                                    <Link
                                        to={{
                                            pathname: `/releases/${release.cat_num}/`,
                                            state: { release }
                                        }}
                                        key={index}
                                    >
                                        <Release
                                            item={release}
                                            id={index}
                                            key={index}
                                        />
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
                <Link to="/releases" replace>ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasesPreview;