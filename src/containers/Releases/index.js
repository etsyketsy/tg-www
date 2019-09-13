import React, { Component } from 'react';
import releaseData from './releaseData.js';
import ItemInfo from '../ItemInfo';


const Release = props => {
    return (
        <div className="release"
            onMouseOver={props.onMouseOver}
            id={props.release.releaseNumber}
        >
            <img src={props.release.img} className="cover" alt={props.release.name} />
            <div className="description">
                <div>{props.release.name}</div>
                <div>{props.release.artist}</div>
            </div>
        </div>
    )
}


class Releases extends Component {

    state = {
        itemsToRender: 2
    }

    // function detecting mouse movements
    hoverHandler = event => {
        console.log(event.currentTarget)
        this.setState({
            item: event.currentTarget.releaseNumber,
            active: true,
        })
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
                        releaseData.slice(0, this.state.itemsToRender).map((release, index, hoverHandler) => {
                            return (
                                <Release className="release" release={release} key={index} onMouseOver={this.hoverHandler} />
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