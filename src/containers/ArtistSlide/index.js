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
                <h2>loading...</h2>
            :
            
            <div className="artistSlide" id={this.props.index}>
                {/* <Link to="/artists" replace id="exit">&#215;</Link> */}
               <button onClick={this.props.history.goBack}>&#215;</button>
                <div className="desc">
                    
                    <p className='name'>
                        {this.state.item.artist}
                        <br />
                        <p className='location'>  
                          {this.state.item.artist_location}
                        </p>
                    </p>
                        <img src={this.state.item.image} alt='img' className='artistPhoto'/>
                </div>
                <p className='bio'>
                    {this.state.item.artist_bio}
                </p>   
                

            </div>
        )
    }
}


export default ArtistSlide;