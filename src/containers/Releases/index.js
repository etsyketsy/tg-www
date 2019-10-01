import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';
import DetailView from '../DetailView/index.js';

class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length-1)
    }

    clickHandler = (e) => {
        this.setState(
            {currentItem: e.currentTarget.id,
            showDetail: !this.state.showDetail}
        )
            
    
    }

    render() {
        console.log('state check ' + this.state.currentItem)
        return (
            (this.state.currentItem) ?
            
            <div>
                <DetailView />
                <p>{this.state}</p>
            </div>


            :

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