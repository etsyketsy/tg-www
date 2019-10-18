import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";


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
                    releases={this.props.releases}
                >
                    <div>{this.props.item.release_title}</div>
                    <div>{this.props.item.artist}</div>
                    <div> Release: {this.props.item.cat_num}</div>
  
                </div>
                :
                <div className="release"
                    id={this.props.id}
                    onMouseEnter={this.hoverHandler}
                    onClick={this.props.onClick}
                    releases={this.props.releases}
                >
                    cover will go here...
                </div>
        )
    }
}

export default Release;
