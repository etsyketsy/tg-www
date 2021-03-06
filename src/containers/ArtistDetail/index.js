import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class ArtistDetail extends Component {
    state = {
        item: null
    }

    exitHandler = (props) => {
        // Clicking the exit will push user back to All Artists or homepage depending on user's path
        (!this.props.location.state) ?
            this.props.history.push('/artists')
            :
            this.props.history.goBack()
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
                <p id='loading'>loading...</p>
                :
                <div className="artistSlide" id={this.props.index}>
                    <button onClick={this.exitHandler}>&#215;</button>

                    <div className="desc">
                        <div className='name'>
                            {this.state.item.artist}
                            <br />
                            <div className='location'>{this.state.item.artist_location}
                            </div>
                        </div>
                        <img src={this.state.item.image} alt='img' className='artistPhoto' />
                    </div>
                    <div className='bio'>
                        {ReactHtmlParser(this.state.item.artist_bio)}
                    </div>
                </div>
        )
    }
}


export default ArtistDetail;