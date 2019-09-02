import React, { Component } from 'react';
import './index.css';
import Release from '../../components/release/index';

class ReleaseGrid extends Component {

  render () {
    return (
      <ul>
        {
          this.props.releases.map((release) => {
            return <Release />
          })

        }
      </ul>
    )
  }
}

export default ReleaseGrid;
