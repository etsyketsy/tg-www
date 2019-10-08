import React,    { Component } from 'react';


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
            id={this.props.artist.artist}
            onClick={this.props.onClick}
          >
            <div>Picture coming</div>
          </div>
        :
          <div className="artist"
            onMouseOver={this.hoverHandler}
            id={this.props.artist.artist}
            onClick={this.props.onClick}
          >
            <div>{this.props.artist.artist}</div>
          </div>
      )
    }
  
  }

  export default Artist;