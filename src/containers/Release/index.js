import React, { Component } from 'react';
import DetailView from '../DetailView'


class Release extends Component {
    state = {
        showInfoState: false
    }

    clickHandler = (e) => {

        this.props.history.push('/release_detail')
    }

    render() {

        return (
            (this.state.showInfo) ?
                <div className="release"
                    id={this.props.item.releaseNumber}
                    onClick={this.clickHandler}
                >
                    <div>{this.props.item.name}</div>
                    <div>{this.props.item.artist}</div>
                    <div> Release: {this.props.item.releaseNumber}</div>

                </div>
                :
                <div className="release"
                    id={this.props.item.releaseNumber}
                    onClick={this.clickHandler}
                >
                    <img src={this.props.item.img}
                        className="cover"
                        alt={this.props.item.name}
                    />
                </div>
        )
    }
}

export default Release;
