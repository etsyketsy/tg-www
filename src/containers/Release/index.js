import React, { Component } from 'react';
import './index.css';

class Release extends Component {

    render() {
        return (
                <div id="releaseTile">
                    <img className='photoPreview' 
                        src={this.props.item.image} 
                        alt='releaseCover' />
                    <div id='info'>
                        <div className='release_title'>                 
                            {this.props.item.release_title}
                        </div>
                        <div className='release_artist'>
                            by {this.props.item.artist}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Release;
