import React, { Component } from 'react';
import releaseData from './releaseData.js';
import ItemInfo from '../ItemInfo';


const Release = props => {
    console.log(props.release)
    return (
        <div className="release"
            onMouseOver={props.onMouseOver}
            onClick={props.onClick}
            id={props.release.releaseNumber}
            isActive={'False'}
        >
            {
                (props.release.isActive) ?
                    <img src={props.release.img} className="cover" alt={props.release.name}/>
                    :
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
        itemsToRender: 2
    }

    // function detecting mouse movements
    clickHandler = (event, props) => {
        console.log(event.currentTarget.id)
        console.log(event.currentTarget)
        {event.currentTarget.isActive=True}
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
                                <Release release={release} key={index} onClick={this.clickHandler} />
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