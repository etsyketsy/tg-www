import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './index.css';
import Release from '../Release/index.js';
import ReleasesPreview from './ReleasesPreview.js';


class Releases extends Component {
    state = {

    }

    componentDidMount() {
        fetch('http://localhost:8000/backend/api/release/')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    { releases: data }
                )
            })
    }


    // Renders release display grid with all releases if no item is selected
    render() {
        return (
            (!this.state.releases) ?
                <h1>&#8635;</h1>
                :
                <div className="content" id="releases">
                    <div className="sectionHeader">Releases</div>
                    <div className="displayGrid">
                        {
                            (window.location.pathname === '/releases') ?

                            this.state.releases.map(
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
                        :
                            <ReleasesPreview
                                releases={this.state.releases}
                            />
                        }
                    </div>
                </div>

        )
    }
}

export default withRouter(Releases);