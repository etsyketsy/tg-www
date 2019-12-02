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
          <div id="itemTile">
            <img className='photoPreview' 
              src={this.props.item.image} 
              alt='artistPhoto' />
            <div id='info'>
              <p>{this.props.item.artist}</p>
            </div>
          </div>
      )
    }
  
  }

  export default Artist;