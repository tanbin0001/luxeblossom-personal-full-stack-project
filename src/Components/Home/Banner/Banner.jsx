import img1 from '../../../assets/banner/slider-1.png'
import img2 from '../../../assets/banner/slider-2.png'
import img3 from '../../../assets/banner/slider-3.png'

import { Carousel } from "keep-react";
const Banner = () => {
    const carouselStyle = { height: '900px' }; // Adjust the height as needed

    return (
        <Carousel indicatorsType="ring" indicators={true} style={carouselStyle} >

            <img
                src={img1}
                alt="slider-1"
                style={{ height: '100%', width: '100%' }}
            />
            <img
                src={img2}
                alt="slider-1"
                style={{ height: '100%', width: '100%' }}
            />
            <img
                src={img3}
                alt="slider-1"
                style={{ height: '100%', width: '100%' }}
            />
            
        </Carousel>
    )
};

export default Banner;