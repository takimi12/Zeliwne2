'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import vulkan from "../../../public/static/HomePage/MostPopular/vulkan3kolumny.png";
import Emmeline from "../../../public/static/HomePage/MostPopular/Emmeline.png";
import Mercury from "../../../public/static/HomePage/MostPopular/Mercury.png";
import { SwiperNavButtons } from '../Inspiration/helpers/SwiperNavButtons.jsx';
import Image from 'next/image';


function MostPopular() {
  return (
    <section className="MostPopular">
   
      <div className='SwiperSliderParent'>
        <Swiper
          spaceBetween={20}
          slidesPerView='auto'
          slidesOffsetBefore={40}
            >
             <div className='swiper-top'>
        <h4 className='h4'>Najczęściej wybierane</h4>
        <SwiperNavButtons />
        </div>
      
          <SwiperSlide>
            <div className='SwiperSliderWrapper'>
              <div className='SwipersSliderImage'>
                <Image src={vulkan} alt="Vulcan — 3 kolumny" />
              </div>
            </div>
            <div className='SwipperSliderHeading'>
              <h6 className='h6-600'>Vulcan — 3 kolumny</h6>
              <h6 className='h6-600'>od  700 zł</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='SwiperSliderWrapper'>
              <div className='SwipersSliderImage'>
                <Image src={Emmeline} alt="Emmeline — 2 kolumny" />
              </div>
            </div>
            <div className='SwipperSliderHeading'>
              <h6 className='h6-600'>Emmeline — 2 kolumny</h6>
              <h6 className='h6-600'>od  850 zł</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='SwiperSliderWrapper'>
              <div className='SwipersSliderImage'>
                <Image src={Mercury} alt="Mercury 4 - kolumny" />
              </div>
            </div>
            <div className='SwipperSliderHeading'>
              <h6 className='h6-600'>Mercury 4 - kolumny</h6>
              <h6 className='h6-600'>od  700 zł</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='SwiperSliderWrapper'>
              <div className='SwipersSliderImage'>
                <Image src={Mercury} alt="Mercury 4 - kolumny" />
              </div>
            </div>
            <div className='SwipperSliderHeading'>
              <h6 className='h6-600'>Mercury 4 - kolumny</h6>
              <h6 className='h6-600'>od  700 zł</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default MostPopular;
