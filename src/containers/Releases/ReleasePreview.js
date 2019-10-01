import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import releaseData from './releaseData.js';


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

        return (
            (this.state.showInfo) ?
                <div className="release"
                    id={this.props.data.releaseNumber}
                    onClick={this.clickHandler}
                >
                    <div>{this.props.data.name}</div>
                    <div>{this.props.data.artist}</div>
                    <div> Release: {this.props.data.releaseNumber}</div>

                </div>
                :
                <div className="release"
                    id={this.props.data.releaseNumber}
                    onClick={this.clickHandler}
                >
                    <img src={this.props.data.img} 
                        className="cover" 
                        alt={this.props.data.name}
                    />
                </div>
        )
    }

}



class ReleasePreview extends Component {

    state = {
        itemsToRender: 4,
    }


    viewMoreHandler = () => {
        this.props.history.push('/releases');

    }


    render() {
        console.log('state check ' + this.state.homeDisplay)

        return (
            <div className="content" id="releasePreview">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        releaseData.slice(0, this.state.itemsToRender).map(
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
                <Link to="releases">ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasePreview;