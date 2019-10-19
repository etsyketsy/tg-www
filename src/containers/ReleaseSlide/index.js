import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class ReleaseSlide extends Component {

    state = {
        item: null
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
        return (

            (!this.state.item) ?
            <h2>loading...</h2>
            :
            
            <div className="releaseSlide" id={this.props.index}>
                <Link to="/releases" replace id="exit">&#215;</Link>
                
                <div className="desc">
                    <h2>{this.state.item.release_title}</h2>
                    {this.state.item.fk_artist}
                    {this.state.item.tracklisting}
                    <br></br>
                    {this.state.item.cat_num}
                    <br></br> 
                </div>
                
            </div>


        )
    }
}


export default withRouter(ReleaseSlide);