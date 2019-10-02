import React, { Component } from 'react';
import releaseData from '../Releases/releaseData';
import { withRouter } from 'react-router-dom';


class DetailView extends Component {
    state = {
        item: releaseData[this.props.index],
        index: this.props.index
    }

    backHandler = (e) => {
        this.setState(
            {
                item: releaseData[this.props.index-1],
                index: this.state.index -1,  
            }
        )
    }

    // componentWillMount = () => {
    //     this.setState({
    //         item: releaseData[this.props.index],
    //         index: this.props.index
    //     })
    // }

    render() {
        console.log(this.state.item)
        // console.log('in the render ' + this.state.name )
        // console.log('index in render '+ this.state.index)
        return (
            <div className="content" id="releaseSlides">
                <div className="carousel">
                    <button id="cancel" onClick={console.log("/releases")}>X</button>
                    <button className="arrow"id="backArrow" onClick={this.backHandler}>BACK</button>

                        <img className="release" id="slide" src={this.state.item.img} alt="cover"></img>
                        <p>{this.state.item.name}</p>
                    <button className="arrow" id="nextArrow" onClick={console.log("clicked next arrow")}>NEXT</button>
                </div>
            </div>
        )
    }
}


export default withRouter(DetailView);