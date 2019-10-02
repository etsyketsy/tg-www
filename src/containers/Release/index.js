import React, { Component } from 'react';
import DetailView from '../DetailView'


class Release extends Component {
    state = {
        showInfo: false
    }

    clickHandler = (event) => {
        console.log('hello ' + this.props.id)
    }

    hoverHandler = (e) => {
        this.setState(
            {showInfo: !this.state.showInfo}
        )
    }

    render() {
        return (
            (this.state.showInfo) ?
                <div className="release"
                    id={this.props.item.index}
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
                    id={this.props.item.index}
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
