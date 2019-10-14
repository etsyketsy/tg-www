import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Artist from '../Artist/index.js';
import ArtistSlide from '../ArtistSlide/index.js';
import ArtistPreview from '../Artists/ArtistPreview.js'


class Artists extends Component {

  state = {
    currentIndex: null
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
    let end = this.state.artists.length - 1
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
  clickHandler = (e) => {
    this.setState({ currentIndex: e.currentTarget.id })
  }



  componentDidMount() {
    fetch('http://localhost:8000/backend/api/artist/')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { artists: data }
        )
      })
  }

  render() {

    return (
      (this.state.currentIndex == null) ?
        <div className="content" id="artists">
          <div className="sectionHeader">Artists</div>
          <div className="displayGrid">
            {
              (this.state.artists) ?
                (window.location.pathname === '/artists') ?
                  this.state.artists.map(
                    (artist, index) => {
                      return (
                        <Artist
                          artist={artist}
                          key={index}
                          id={index}
                          onClick={this.clickHandler}
                          hidden={false}
                        />
                      )
                    }
                  )
                  :
                  <ArtistPreview 
                  artists={this.state.artists}/>
      
                :
                <h1>&#8635;</h1>
            }
          </div>
        </div>
        :
        <ArtistSlide className='slide'
          index={this.state.currentIndex}
          item={this.state.artists[this.state.currentIndex]}
          id={this.state.currentIndex}
          lastSlideHandler={this.lastSlideHandler}
          nextSlideHandler={this.nextSlideHandler}
          exitHandler={this.exitHandler}
          artists={this.state.artists}
        />

    )
  }
}

export default withRouter(Artists);
