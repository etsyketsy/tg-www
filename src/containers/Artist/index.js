import React,    { Component } from 'react';
import './index.css';

class Artist extends Component {
    state = {
      showInfo: false
    }

    hoverHandler = event => {
      this.setState({
        showInfo: !this.state.showInfo
      })
    }
  
    render() {
      console.log(this.props)
      return (
        (!this.state.showInfo) ?
  
          <div className="artist"
            onMouseEnter={this.hoverHandler}
            id={this.props.id}
            onClick={this.props.onClick}
          >
            <img className='artistPreview' src={this.props.item.image} alt='artistPhoto' />
          </div>
        :
          <div className="artist"
            onMouseEnter={this.hoverHandler}
            id={this.props.id}
            onClick={this.props.onClick}
          >
            <div>{this.props.item.artist}</div>
          </div>
      )
    }
  
  }

  export default Artist;