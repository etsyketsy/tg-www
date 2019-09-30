import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';


class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length-1),
    }


    loadMoreHandler = () => {
        this.props.history.push('/releases');

    }


    render() {
        console.log('state check ' + this.state.itemsToRender)

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
                                        data={release}
                                        key={index}
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