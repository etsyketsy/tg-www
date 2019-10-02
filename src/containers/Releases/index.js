import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';
import DetailView from '../DetailView/index.js';

class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length-1),
        releases: releaseData
    }

    clickHandler = (e) => {
        this.setState(
            {showDetail: !this.state.showDetail,
            currentIndex: e.currentTarget.id}
        )
    }

    render() {
        console.log('state check ' + this.state.currentIndex)
        return (
            (this.state.currentIndex) ?
            
            <div>
                <DetailView index={this.state.currentIndex} history={this.history}/>
            </div>
            :
            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {this.props.children}
                    {
                        this.state.releases.map(
                            (release, index) => {
                                return (
                                    <Release
                                        item={release}
                                        id={index}
                                        key={index}
                                        onClick={this.clickHandler}
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