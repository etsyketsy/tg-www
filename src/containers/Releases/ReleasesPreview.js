import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Release from '../Release';


class ReleasesPreview extends Component {

    state = {
        itemsToRender: 4,
    }

    render() {
        return (

            <div className="content" id="releasePreview">
                <div className="displayGrid">
                    {
                        this.props.releases.slice(0, this.state.itemsToRender).map(
                            (release, index) => {
                                return (
                                    <Link
                                        to={{
                                            pathname: `/releases/${release.cat_num}/`,
                                            state: { release }
                                        }}
                                        key={index}
                                    >
                                        <Release
                                            item={release}
                                            id={index}
                                            key={index}
                                        />
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
                <Link to="/releases" replace>ALL RELEASES</Link>
            </div>
        )
    }
}

export default ReleasesPreview;