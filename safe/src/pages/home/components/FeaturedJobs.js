import React, { useState } from 'react';
import './FeaturedJobs.css';

// icons
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

// slider
import ReactSimplyCarousel from 'react-simply-carousel';

// images
import Image1 from '../../../img/home/Image1.jpg';
import Image2 from '../../../img/home/Image2.jpg';
import Image3 from '../../../img/home/Image3.jpg';
import Image4 from '../../../img/home/Image4.jpg';
import Image5 from '../../../img/home/Image5.jpg';
import Image6 from '../../../img/home/Image6.jpg';

function FeaturedJobs() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div id='FeaturedJobs'>

            <div className='FeaturedHeader'>
                <p className='FeaturedTxt'>Featured Jobs</p>
            </div>
            <div className='FeaturedCarousel'>
                <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}
                    dotsNav={{
                        show: true,
                        itemBtnProps: {
                            style: {
                                height: 8,
                                width: 8,
                                borderRadius: "50%",
                                border: 0,
                                background: "rgba(255, 255, 255, 0.5)",
                                margin: 6
                            }
                        },
                        activeItemBtnProps: {
                            style: {
                                height: 8,
                                width: 8,
                                borderRadius: "50%",
                                border: 0,
                                background: "white",
                                margin: 6
                            }
                            }
                        }}
                    forwardBtnProps={{
                        style: {
                        alignSelf: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        overflow: 'none',
                        },
                        children: <span className='carouselBtnProps' >{<FontAwesomeIcon icon={faArrowRight}/>}</span>,
                    }}
                    backwardBtnProps={{
                        style: {
                        alignSelf: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        overflow: 'none',
                        },
                        children: <span className='carouselBtnProps1'>{<FontAwesomeIcon icon={faArrowLeft}/>}</span>,
                    }}
                    responsiveProps={[
                        {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 320,
                        },
                    ]}
                    speed={300}
                    easing="linear"
                    >
                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image1} alt='Image1'/>
                    </div>

                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image2} alt='Image2'/>
                    </div>

                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image3} alt='Image3'/>
                    </div>

                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image4} alt='Image4'/>
                    </div>

                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image5} alt='Image5'/>
                    </div>

                    <div className='FeaturedJobimg'>
                        <img className='FeaturedImages' src={Image6} alt='Image6'/>
                    </div>
                </ReactSimplyCarousel>
            </div>
        </div> 
    )
}

export default FeaturedJobs