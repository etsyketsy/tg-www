import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';
import { withRouter } from 'react-router-dom';


class DetailView extends Component {

    componentWillMount = () => {
        this.setState({
            current: releaseData[this.props.index]
        })
    }

    render() {
        return (
            <div className="content" id="releaseSlides">
                <div className="carousel">
                    <button id="cancel" onClick={console.log("/releases")}>X</button>
                    <button className="arrow" id="nextArrow" onClick={console.log("clicked right arrow")}>NEXT</button>
                    <img className="release" id="slide" src={this.state.current.img} alt="cover"></img>
                    <p>{this.state.current.name}</p>
                    <button className="arrow"id="backArrow" onClick={console.log("clicked left arrow'")} >BACK</button>
                </div>
            </div>
        )
    }
}


export default withRouter(DetailView);