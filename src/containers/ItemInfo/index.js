import React, { Component } from 'react';


class ArtistInfo extends Component {
    
    clickOutHandler = () =>{
        return (
            console.log('closing item')
        )
    }

    render() {
        return (
            <div className="artistInfo">
                details here...
            </div>
        )
    }
}

export default ArtistInfo;