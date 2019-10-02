import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';
import DetailView from '../DetailView/index.js';

class Releases extends Component {

    state = {
        showDetail: false,
        itemsToRender: (releaseData.length-1)
    }

    clickHandler = (e, id) => {
        console.log('in the click ' + e.currentTarget.id)
        this.setState(
            {showDetail: !this.state.showDetail,
            currentItem: e.currentTarget.name}
        )
    }

    render() {
        console.log('state check ' + this.state.showDetail)
        return (
            (this.state.currentItem) ?
            
            <div>
                <DetailView show={this.state.showDetail} item={this.state.currentItem}>{this.props.children}</DetailView>
    
            </div>


            :

            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {this.props.children}
                    {
                        releaseData.map(
                            (release, index) => {
                                return (
                                    <Release
                                        className="release"
                                        item={release}
                                        id={index}
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