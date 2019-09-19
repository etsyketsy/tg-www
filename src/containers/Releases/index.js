import React, { Component } from 'react';
import releaseData from './releaseData.js';
// import Release from '../Release';


const ReleaseInfo = props => {
    let current =  releaseData.filter(release => release.releaseNumber  === this.state.activeRelease);
    console.log(current)
    return (
        <div className="ReleaseInfo" release={current} id={current.releaseNumber}>
           {current.releaseNumber} is active
        </div>
    )
}

class Release extends Component {
    state = {
        showInfoState: false
    }

    clickHandler = (event, item) => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        console.log('release state check ' + this.state.showInfo)

      
        return (
            (this.state.showInfo) ?
            <div className="release"
                id={this.props.data.releaseNumber}
                onClick={this.clickHandler}
            >
                <img src={this.props.data.img} className="cover" alt={this.props.data.name} />
                <div className="description">
                    <div>{this.props.data.name}</div>
                    <div>{this.props.data.artist}</div>
                    <div> Release: {this.props.data.releaseNumber}</div>
                </div>
            </div>
        
        :

            <div className="release"
                id={this.props.data.releaseNumber}
                onClick={this.clickHandler}
            >
                <div className="description">
                    <div>{this.props.data.name}</div>
                    <div>{this.props.data.artist}</div>
                </div>
            </div>
        )
    }

}



class Releases extends Component {

    state = {
        itemsToRender: 2,
    }


    loadMoreHandler = () => {
        this.setState({
            itemsToRender: (this.state.itemsToRender + 4)
        })
    }

    render() {
        console.log('state check ' + this.state.showInfoState)
        return (
            <div className="content" id="releases">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        releaseData.slice(0, this.state.itemsToRender).map((release, index) => {
                            return (
                                <Release 
                                className="release"
                                    data={release}
                                    key={index} 
                                />
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