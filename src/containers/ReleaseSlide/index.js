import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ReleaseSlide extends Component {
    
    state = {
        currentRelease: null
    }

    componentDidMount() {
        
        (!this.props.location.state) ?
        
        fetch(`http://localhost:8000/backend/api/release/${this.props.match.params.cat_num}/`)
        .then(response => response.json())
        .then(data => {
            this.setState(
                { item: data[0] }
        )
    })
        :
        this.setState({
            item: this.props.location.state.release
        })
    }

    render() {
        // console.log(this.state)
        return (

            (this.state.item) ?
            <div className="slide" id={this.props.index}>
                <button id="cancel" onClick={this.props.exitHandler}>
                    &#215;
                </button>
                
                <div className="desc">
                    <h2>{this.state.item.release_title}</h2>
                    {this.state.item.fk_artist}
                    {this.state.item.tracklisting}
                    <br></br>
                    {this.state.item.cat_num}
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
            :
            <h2>loading...</h2>


        )
    }
}


export default withRouter(ReleaseSlide);