import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';
import { withRouter } from 'react-router-dom';


class DetailView extends Component {
 
    render() {
        return (
            <div className="content" id="releaseSlides">
                <div className="carousel">
                    <div className="slide" id={this.props.index}>
                        <button id="cancel" >X</button>
                        <button className="arrow" id="backArrow" onClick={this.props.lastSlideHandler}>BACK</button>

                            <img className="release" id="slide" src={this.props.item.img} alt="cover"></img>
                            <p>{this.props.item.name}</p>
                        <button className="arrow" id="nextArrow" onClick={this.props.nextSlideHandler}>NEXT</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(DetailView);