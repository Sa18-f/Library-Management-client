// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/images/bgImg1.jpg';
import bgImg2 from '../assets/images/bgImg2.jpg';
import bgImg3 from '../assets/images/bgImg3.jpg';


export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={bgImg3} text='Unlock Knowledge, Navigate with Ease: Your Library, Your Portal!'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg2} text="Empowering Minds, One Click at a Time: Explore, Discover, Thrive!"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg1} text="Your Gateway to Boundless Knowledge: Explore, Engage, Excel!"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}