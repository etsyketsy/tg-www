import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ReleaseSlide extends Component {
    
    state = {
        currentRelease: null
    }

    inputHandler = e => {
        e.preventDefault();
        this.setState({ input: e.target.value.toUpperCase() });
    
        if (this.props.inputFields) {
          const newElement = this.props.inputFields.find(
            element =>
              element.numbering.substr(0, 3) === this.state.input.substr(0, 3)
          );
          return this.setState({ elementFound: newElement });
        }
      };

    componentDidMount() {
        let current = this.props.match.params.id
        let allReleases = this.props.releases 
        console.log(this.props)

        // 1. set id to cat_num
        // 2. pass cat_num in url
        // 3. get array of releases
        // 4. use .find to match currentRelease to release with matching cat_num
        // allReleases.map(
        //     (release) => {
        //         (release.id == current) ?
        //             this.setState({
        //                 currentRelease: {release}
        //             })
        //         :
        //         this.state = {
        //             currentRelease: null
        //         }
        //     }
        // )
        // console.log(this.state.currentRelease)
    }

    render() {
        
        return (
            <div className="slide" id={this.props.index}>
                <button id="cancel" onClick={this.props.exitHandler}>
                    &#215;
                </button>
                
                <div className="desc">
                    {/* <h2>{this.props.item.release_title}</h2>
                    {this.props.item.artist}
                    {this.props.item.tracklisting}
                    <br></br>
                    {this.props.item.cat_num}
                    <br></br> */}
                    
                </div>
                
                <div className="nav">
                    <button className="arrow"
                        id="backArrow"
                        onClick={this.props.lastSlideHandler}>
                        &larr;
                    </button>
                    <button className="arrow"
                        id="nextArrow"
                        onClick={this.props.nextSlideHandler}>
                        &rarr;
                    </button>
                </div>

            </div>


        )
    }
}


export default withRouter(ReleaseSlide);