import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import releaseData from './releaseData.js';
import Release from '../Release';


class ReleasePreview extends Component {

    state = {
        itemsToRender: 4,
    }


    viewMoreHandler = () => {
        this.props.history.push('/releases');

    }

    onComponentDidMount() {
        fetch('http://localhost:8000/backend/api/release/')
        .then(response => response.json())
        .then(data => {
          this.setState(
            { releases: data }
          )
        })
    }


    render() {
        console.log('state check ' + this.state.homeDisplay)

        return (
            <div className="content" id="releasePreview">
                <div className="sectionHeader">Releases</div>
                <div className="displayGrid">
                    {
                        releaseData.slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                return (
                                    <Release
                                        className="release"
                                        data={release}
                                        key={index}
                                    />
                                )
                            }
                        )
                    }
                </div>
                <Link to="releases">ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasePreview;