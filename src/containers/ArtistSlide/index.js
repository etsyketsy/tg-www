import React, { Component } from 'react';
import './index.css';


class ArtistSlide extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        (!this.props.location.state) ?

        fetch(`http://localhost:8000/api/artists/${this.props.match.params.artist_nice_name}/`)
        .then(response => response.json())
        .then(data => {
            this.setState(
                { item: data[0] }
            )
        })
        :
        this.setState({
            item: this.props.location.state.artist
        })
    }

    render() {
        return (
            (!this.state.item) ?
                <div />
            :
            <div className="artistSlide" id={this.props.index}>
               <button onClick={this.props.history.goBack}>&#215;</button>
               
                <div className="desc">
                    <div className='name'> 
                        {this.state.item.artist}
                        <br />
                        <div className='location'>{this.state.item.artist_location}
                        </div>
                    </div>
                        <img src={this.state.item.image} alt='img' className='artistPhoto'/>
                </div>
                <p className='bio'>{this.state.item.artist_bio}</p>   
            </div>
        )
    }
}


export default ArtistSlide;