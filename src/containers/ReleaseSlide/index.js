import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ReleaseSlide extends Component {

    render() {
        console.log(this.props.item)
        return (
            <div className="slide" id={this.props.index}>
                <button id="cancel" onClick={this.props.exitHandler}>
                    &#215;
                </button>
                
                <div className="desc">
                    <h2>{this.props.item.release_title}</h2>
                    {this.props.item.artist}
                    {this.props.item.tracklisting}
                    <br></br>
                    {this.props.item.cat_num}
                    <br></br>
                    
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


export default withRouter(ReleaseSlide);