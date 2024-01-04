import img1 from '../../../assets/banner/slider-1.png'
import img2 from '../../../assets/banner/slider-2.png'
import img3 from '../../../assets/banner/slider-3.png'


  
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


 
const Banner = () => {
 
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
          
           
        </Swiper>
      </>
    )
};

export default Banner;