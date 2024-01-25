'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import Image from 'next/image';
import styles from './MostPopular.module.scss';
import SwiperNav from '@/app/components/series/SwiperNav';
import { useState } from 'react';
import Link from 'next/link';

function MostPopular({ data }) {
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
console.log(data)

  const handleReachEnd = () => {
    setIsAtBeginning(false);
    setIsAtEnd(true);
  };

  const handleReachBeginning = () => {
    setIsAtBeginning(true);
    setIsAtEnd(false);
  };


  return (
    <section className={styles.mostPopular}>
      <div className='SwiperSliderParent'>
        <Swiper
          spaceBetween={20}
          slidesPerView='auto'
          slidesOffsetBefore={40}
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
        >
          <div className={styles.swiperTop}>
            <h4>Najczęściej wybierane</h4>
          <div>
            <SwiperNav  first={isAtBeginning} last={isAtEnd}/> 
          </div>
          </div>

          {data.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
            <Link to href={`/product/${item.link_do_produktu.ID}`}>
   
              <div className={styles.swiperSliderWrapper}>
                <div className='SwipersSliderImage'>
                <img
  src={item.image.url}
  alt={item.title}
  width={item.image.width} // Add this line
  height={item.image.height} // Add this line
/>
                </div>
              </div>
              <div className={styles.swipperSliderHeading}>
                <h6 className='h6-600'>{item.title}</h6>
                <h6 className='h6-600'>{item.price}</h6>
              </div>
              </Link>
            </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MostPopular;
