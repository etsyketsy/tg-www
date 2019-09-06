import React, { Component } from 'react';
import releaseData from './releaseData.js';


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

    // function detecting mouse movements
    hoverHandler = event => {
        console.log(event.currentTarget.id)
        this.setState({
            item: event.currentTarget.releaseNumber,
            active: true,
        })
    }

    render() {
        return (
            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {releaseData.map((release, index, hoverHandler) => {
                        return (
                            <Release release={release} key={index} onMouseOver={this.hoverHandler} />
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Releases;