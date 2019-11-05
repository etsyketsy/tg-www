import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class ReleaseSlide extends Component {

    state = {
        item: null
    }

    clickHandler = (props) => {

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

                <div className="releaseSlide" id={this.props.index}>
                    <button onClick={this.clickHandler}>&#215;</button>
                    <div className="desc">
                        <h2>{this.state.item.release_title}</h2>
                        {this.state.item.fk_artist}
                        {this.state.item.tracklisting}
                        <br></br>
                        {this.state.item.cat_num}
                        <br></br>

                        <div>Tracks:
                        <ol>
                            {
                                this.state.item.tracks.map(
                                    (track) => {
                                        return (
                                            <li>{track.title}</li>
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


export default withRouter(ReleaseSlide);