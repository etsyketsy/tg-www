import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import releaseData from '../Releases/releaseData';


const PreviousArrow = (direction, clickFunction) => {

    return (
        <button id='leftArrow' onClick={console.log('clicked left arrow')} >BACK</button>
    )
    
}


const NextArrow = (direction, clickFunction) => {
    return(
        <button id='leftArrow' onClick={console.log('clicked right arrow')}>NEXT</button>
    )
}


const Slide = ( item ) => {
    return (

        <div>
            <img className='release' id='slide' src={null} alt='cover'></img>
        </div>
    )
}

class DetailView extends Component{

    render(){
        console.log('in the render')
        return(
            <div className="content" id="releaseSlides">
                <div className="carousel">
                    <PreviousArrow />
                    {/* {
                        releaseData.map(
                            (release, index) => {
                                return (
                                    <Slide
                                        className="release"
                                        data={release}
                                        key={index}
                                    />
                                )
                            }
                        )
                    } */}
                    <Slide className="release">hello</Slide>

                    <NextArrow />
                </div>
            </div>
        )
    }
}


export default withRouter(DetailView);