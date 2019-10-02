import React, { Component } from 'react';
import './index.css';
import { withRouter } from 'react-router-dom';


class DetailView extends Component {

    render() {
        return (
            <div className="slide" id={this.props.index}>
            <button id="cancel" >,--</button>
                <img
                    id="slideCover"
                    src={this.props.item.img}
                    alt="cover">
                </img>
                <div className="desc">
                    <p>{this.props.item.name}
                    <br></br>
                    {this.props.item.artist}
                    <br></br>
                    {this.props.item.releaseNumber}
                    </p>
                </div>
                
                <div className="nav">
                    <button className="arrow"
                        id="backArrow"
                        onClick={this.props.lastSlideHandler}>
                        &larr;
                            </button>
                    <button className="arrow"
                        id="nextArrow"
                        onClick={this.props.nextSlideHandler}>
                        &rarr;
                    </button>
                </div>

            </div>


        )
    }
}


export default withRouter(DetailView);