import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import releaseData from './releaseData.js';
import Release from '../Release/index.js';
import DetailView from '../DetailView/index.js';

class Releases extends Component {

    state = {
        itemsToRender: (releaseData.length - 1),
        releases: releaseData
    }

    // Pushes user back to 'All Releases' page by clearing selected item
    exitHandler = () => {
        this.setState({
            currentIndex: null
        })
    }

    // Returns true if item is first or last in array so further advancing is blocked
    // Called in the last/next handlers before increasing or decreasing current index
    listEndCheck = (e) => {
        
        let current = Number(e.currentTarget.parentNode.parentNode.id)
        let end = this.state.releases.length-1
        let start = 0

        return(
            (current === end || current === start) ? true : false
        )
    }

    // If item is first item, return the same item indefinitely
    // ID is set as the item index and stored in the target div's grandparent
    lastSlideHandler = (e) => {
        (this.listEndCheck(e)) ?
            
            this.setState({currentIndex: Number(e.currentTarget.parentNode.parentNode.id)})
        :
        this.setState(
            {
                currentIndex: (Number(e.currentTarget.parentNode.parentNode.id)-1),
            }
        )
    }

    // If item is last item, return the same item indefinitely
    // ID is set as the item index and stored in the target div's grandparent
    nextSlideHandler = (e) => {
        (this.listEndCheck(e)) ?
            this.setState({currentIndex: Number(e.currentTarget.parentNode.parentNode.id)})
        :
            this.setState({currentIndex: (Number(e.currentTarget.parentNode.parentNode.id)+1)}
        )
    }

    // Opens up detailed view of clicked item
    clickHandler = (e) => {
        this.setState(
            {currentIndex: e.currentTarget.id}
        )
    }


    // Renders release display grid with all releases if no item is selected
    render() {
        
        return (
            (this.state.currentIndex == null) ?
                <div className="content" id="releases">
                    <div className="sectionHeader">Releases</div>
                    <div className="displayGrid">
                        {
                            this.state.releases.map(
                                (release, index) => {
                                    return (
                                        <Release
                                            item={release}
                                            id={index}
                                            key={index}
                                            onClick={this.clickHandler}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            :

                <div className="detailView">
                    <DetailView
                        index={this.state.currentIndex}
                        item={releaseData[this.state.currentIndex]}
                        id={this.state.currentIndex}
                        lastSlideHandler={this.lastSlideHandler}
                        nextSlideHandler={this.nextSlideHandler}
                        exitHandler={this.exitHandler}
                        releases={this.state.releases}
                    />
                </div>


        )
    }
}

export default withRouter(Releases);