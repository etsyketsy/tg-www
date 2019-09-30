import React, { Component } from 'react';


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

export default Release;
