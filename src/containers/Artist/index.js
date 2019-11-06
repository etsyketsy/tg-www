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
      return (
        (this.state.showInfo) ?
  
          <div className="artist"
            onMouseOver={this.hoverHandler}
            onClick={this.props.onClick}
          >
            <div>Picture coming</div>
          </div>
        :
          <div className="artist"
            onMouseOver={this.hoverHandler}
            onClick={this.props.onClick}
          >
            <div>{this.props.item.artist}</div>
          </div>
      )
    }
  
  }

  export default Artist;