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

                <div className="releaseDetail">
                    <button onClick={this.clickHandler}>&#215;</button>
                    <div className="desc">
                        <img 
                            src={this.state.item.image} 
                            alt='cover' 
                            id='coverDetail' 
                        />
                        <h2>{this.state.item.release_title}</h2>
                        {this.state.item.fk_artist}
                        <br></br>
                        {this.state.item.cat_num}
                        <br></br>
                        {this.state.item.bio}
                        <div>Tracks:
                        <ol>
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