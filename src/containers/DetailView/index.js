import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import releaseData from '../Releases/releaseData';


const PreviousArrow = (direction, clickFunction) => {

    return (
        <button id='leftArrow' onClick={console.log('clicked left arrow')} >BACK</button>
    )

}


const NextArrow = (direction, clickFunction) => {
    return (
        <button id='leftArrow' onClick={console.log('clicked right arrow')}>NEXT</button>
    )
}


const Slide = (item) => {

    return (

        <div>
            <img className='release' id='slide' src={null} alt='cover'></img>
        </div>
    )
}

const DetailView = (item) => {
//    this.setState (state = {
//        currentSlide: this.props.match.params.id,
//        currentType: this.props.match.params.class
//    }

  
  
        return (
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
                    <Slide className="release" item={item}/>

                    <NextArrow />
                </div>
            </div>
        )

    

}


export default DetailView;