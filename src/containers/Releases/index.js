import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';
import DetailView from '../DetailView/index.js';

class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length - 1),
        releases: releaseData
    }

    lastSlideHandler = (e) => {
        this.setState(
            {
                currentIndex: (Number(e.currentTarget.parentNode.parentNode.id)-1),
            }
        )
    }

    nextSlideHandler = (e) => {
        this.setState(
            {
                currentIndex: (Number(e.currentTarget.parentNode.parentNode.id)+1),
            }
        )
    }

    clickHandler = (e) => {
        this.setState(
            {
                showDetail: !this.state.showDetail,
                currentIndex: e.currentTarget.id,
            }
        )
    }



    render() {
        console.log('view state ' + this.state.currentIndex)
        return (
            (!this.state.currentIndex) ?
                <div className="content" id="releases">
                    <div className="sectionHeader">Releases</div>
                    <div className="displayGrid">
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
                :

                <div className="detailView">
                    <DetailView
                        index={this.state.currentIndex}
                        item={releaseData[this.state.currentIndex]}
                        id={this.state.currentIndex}
                        lastSlideHandler={this.lastSlideHandler}
                        nextSlideHandler={this.nextSlideHandler}
                        releases={this.state.releases}
                    />
                </div>


        )
    }
}

export default withRouter(Releases);