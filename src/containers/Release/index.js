import React, { Component } from 'react';


class Release extends Component {
    
    state = {
        showInfo: false,
    }

    render() {
        return (
            <div className="release"
                id={release.releaseNumber}
                onClick={release.onClick}
            >
                <img src={release.img} className="cover" alt={release.name} />
                <div className="description">
                    <div>{release.name}</div>
                    <div>{release.artist}</div>
                </div>
            </div>
        )
    }
   
}

export default Release