import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './index.css';
import Release from '../Release/index.js';
import ReleaseSlide from '../ReleaseSlide/index.js';

class Releases extends Component {

    state = {
        currentIndex: null,
    }

    // Pushes user back to 'All Releases' page by clearing selected item
    exitHandler = () => {
        this.setState({
            currentIndex: null
        })
    }

    // Returns true if item is first in array so further advancing is blocked
    startCheck = (e) => {
        let current = Number(e.currentTarget.parentNode.parentNode.id)
        let start = 0
        return (
            (current === start) ? true : false
        )
    }

    // Returns true if item is last in array so further advancing is blocked
    endCheck = (e) => {
        let current = Number(e.currentTarget.parentNode.parentNode.id)
        let end = this.state.releases.length - 1
        return (
            (current === end) ? true : false
        )
    }

    // If item is first item, return the same item indefinitely
    // ID is set as the item index and stored in the target div's grandparent
    lastSlideHandler = (e) => {
        (this.startCheck(e)) ?
            this.setState({ currentIndex: Number(e.currentTarget.parentNode.parentNode.id) })
            :
            this.setState(
                { currentIndex: (Number(e.currentTarget.parentNode.parentNode.id) - 1), }
            )
    }

    // If item is last item, return the same item indefinitely
    // ID is set as the item index and stored in the target div's grandparent
    nextSlideHandler = (e) => {
        (this.endCheck(e)) ?
            this.setState({ currentIndex: Number(e.currentTarget.parentNode.parentNode.id) })
            :
            this.setState({ currentIndex: (Number(e.currentTarget.parentNode.parentNode.id) + 1) }
            )
    }

    // Opens up detailed view of clicked item
    // clickHandler = (e) => {
    //     // this.setState({ currentIndex: e.currentTarget.id })
    //     this.props.history.push('releases/' + e.currentTarget.id)
    // }

    componentDidMount() {
        fetch('http://localhost:8000/backend/api/release/')
        .then(response => response.json())
        .then(data => {
          this.setState(
            { releases: data }
          )
        })
    }


    // Renders release display grid with all releases if no item is selected
    render() {
        return (
            (this.state.currentIndex == null) ?
                <div className="content" id="releases">
                    <div className="sectionHeader">Releases</div>
                    <div className="displayGrid">
                        {   (this.state.releases) ?
                                this.state.releases.map(
                                    (release, index) => {
                                        return (
                                            <Link to={`/releases/${release.cat_num}/`
                                            }
                                            key={index}>
                                                <Release
                                                item={release}
                                                id={index}
                                                key={index}
                                                // onClick={this.clickHandler}
                                                />   
                                             </Link>
                                      
                                        )
                                    }
                                )
                            :
                            <h1>&#8635;</h1>
                        }
                    </div>
                </div>
            :
                <div className="releaseSlide">
                    <ReleaseSlide
                        index={this.state.currentIndex}
                        item={this.state.releases[this.state.currentIndex]}
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