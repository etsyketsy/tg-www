import React, { Component } from 'react';
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


const Slide = ( data ) => {
    return (

        <div>
            <img className='release' id='slide' src={data.data.img} alt='cover'></img>
        </div>
    )
}

class Carousel extends Component{

    render(){
        return(
            <div className="content" id="releaseSlides">
                <div className="carousel">
                    <PreviousArrow />
                    {
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
                    }
                    <NextArrow />
                </div>
            </div>
        )
    }
}


export default Carousel;