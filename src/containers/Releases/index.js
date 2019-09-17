import React, { Component } from 'react';
import releaseData from './releaseData.js';
import ItemInfo from '../ItemInfo';
import { throwStatement } from '@babel/types';

const ReleaseInfo = props => {
    
    console.log('in info ' + props.release)

    return (
        <div className="releaseInfo" id={props.release.releaseNumber} img={props.release.img}>
            ReleaseInfo
            <p>release number: {props.release}</p>
            <div>cover art here!!!</div>
            <p>{props.release.name}</p>
        </div>
    )
}

const Release = props => {
    return (
        <div className="release"
            onMouseOver={props.onMouseOver}
            onClick={props.onClick}
            id={props.release.releaseNumber}
        >
            {
                    // <img src={props.release.img} className="cover" alt={props.release.name}/>
                    <div className="description">
                        <div>{props.release.name}</div>
                        <div>{props.release.artist}</div>
                    </div>
            }
        </div>
    )
}


class Releases extends Component {

    state = {
        itemsToRender: 2,
        activeRelease: null
    }

    // function detecting mouse movements
    clickHandler = (event, props) => {
        console.log('in the click ' + event.currentTarget.name)
        this.setState(
            {activeRelease: event.currentTarget.id}
        )
        
    }

    loadMoreHandler = event => {
        this.setState({
            itemsToRender: (this.state.itemsToRender + 4)
        })
    }

    render() {
        return (
            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        (this.state.activeRelease) ?
                        <ReleaseInfo release={this.state.activeRelease} img={this.state.activeRelease}>
                        </ReleaseInfo>

                        :
                            releaseData.slice(0, this.state.itemsToRender).map((release, index, hoverHandler) => {
                                return (
                                    <Release release={release} key={index} onClick={this.clickHandler}/>
                                )
                        })
                    }
                </div>
                {
                    (releaseData.length > this.state.itemsToRender) ?
                        <button className="loadMore" id="loadReleases" onClick={this.loadMoreHandler}>Load more...</button>
                        : null
                }

            </div>
        )
    }
}

export default Releases;