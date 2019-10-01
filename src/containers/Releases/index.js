import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';

class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length-1),
    }


    render() {

        return (
            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        releaseData.map(
                            (release, index) => {
                                return (
                                    <Release
                                        className="release"
                                        item={release}
                                        key={index}
                                        history={this.props.history}
                                    />
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Releases);