import React, { Component } from 'react';
import DetailView from '../DetailView'


class Release extends Component {
    state = {
        showInfo: false
    }

    clickHandler = (e) => {
        // let url = '/release/' + e.currentTarget.id
        // console.log(e.currentTarget)
        // this.props.history.push(url)
        this.setState(
            { showDetail: !this.state.showDetail}
        )

    }

    hoverHandler = () => {
        this.setState(
            {showInfo: !this.state.showInfo}
        )
    }

    render() {
    
        return (
            (this.state.showInfo) ?
                <div className="release"
                    id={this.props.item.releaseNumber}
                    onClick={this.clickHandler}
                    onMouseEnter={this.hoverHandler}
                >
                    <div>{this.props.item.name}</div>
                    <div>{this.props.item.artist}</div>
                    <div> Release: {this.props.item.releaseNumber}</div>

                </div>
                :
                <div className="release"
                    id={this.props.item.releaseNumber}
                    onClick={this.clickHandler}
                    onMouseEnter={this.hoverHandler}
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
