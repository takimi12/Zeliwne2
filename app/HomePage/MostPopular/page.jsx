import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { SwiperNavButtons } from '../Inspiration/helpers/SwiperNavButtons.jsx';
import Image from 'next/image';

function MostPopular({ data }) {

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

          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='SwiperSliderWrapper'>
                <div className='SwipersSliderImage'>
                <img
  src={item.image.url}
  alt={item.title}
  width={item.image.width} // Add this line
  height={item.image.height} // Add this line
/>
                </div>
              </div>
              <div className='SwipperSliderHeading'>
                <h6 className='h6-600'>{item.title}</h6>
                <h6 className='h6-600'>{item.price}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MostPopular;
