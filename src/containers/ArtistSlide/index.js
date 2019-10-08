import React, { Component } from 'react';


class ArtistSlide extends Component {

    render() {
        console.log(this.props.item)
        return (
            <div className="slide" id={this.props.index}>
                <button id="cancel" onClick={this.props.exitHandler}>
                    &#215;
                </button>
               
                <div className="desc">
                    <h2>{this.props.item.artist}</h2>
                    {this.props.item.artist_bio}
                    <p>{this.props.item.artist_location}</p>
                    
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


export default ArtistSlide;