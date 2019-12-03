import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';


class ReleaseDetail extends Component {

    state = {
        item: null
    }

    clickHandler = (props) => {
        // Clicking the exit will push user back to All Releases of homepage depending on the path
        (!this.props.location.state) ?
            this.props.history.push('/releases')
            :
            this.props.history.goBack()
    }

    componentDidMount() {
        (!this.props.location.state) ?

            fetch(`http://localhost:8000/api/releases/${this.props.match.params.cat_num}/`)
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

                <div className='releaseDetail'>
                    <button onClick={this.clickHandler} id='releaseexit'>&#215;</button>
                    <div className='titleCard'>
                        <div className='info'>
                            <div className='name'>
                                {this.state.item.release_title}
                            </div>
                            <div className='artists'>
                                {this.state.item.fk_artist}
                            </div>
                            <div className='release_num'>                            {this.state.item.cat_num}
                            </div>

                        </div>

                        <img
                            src={this.state.item.image}
                            alt='cover'
                            id='cover'
                        />
                    </div>

                    <div className='description'>
                        {this.state.item.bio}

                        <div className='tracks'>Tracks:
                        <ol className='track_list'> 
                                {
                                    this.state.item.tracks.map(
                                        (track) => {
                                            return (
                                                <li key={track.track_number}>           {track.title}
                                                </li>
                                            )

                                        }
                                    )
                                }
                            </ol>

                        </div>

                    </div>
                </div>

        )
    }
}


export default withRouter(ReleaseDetail);