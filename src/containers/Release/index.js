import React, { Component } from 'react';
import DetailView from '../DetailView'
import { release } from 'os';


class Release extends Component {
    state = {
        showInfo: false
    }

    hoverHandler = (e) => {
        this.setState(
            { showInfo: !this.state.showInfo }
        )
    }

    render() {
        return (
            (this.state.showInfo) ?
                <div className="release"
                    id={this.props.id}
                    onMouseEnter={this.hoverHandler}
                    onClick={this.props.onClick}
                >
                    <div>{this.props.item.name}</div>
                    <div>{this.props.item.artist}</div>
                    <div> Release: {this.props.item.releaseNumber}</div>
                    <div>Test: {this.props.id}</div>

                </div>
                :
                <div className="release"
                    id={this.props.id}
                    onMouseEnter={this.hoverHandler}
                    onClick={this.props.onClick}
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
