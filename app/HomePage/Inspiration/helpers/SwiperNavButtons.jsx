import React from 'react';
import { useSwiper } from 'swiper/react';
import ArrowPrev from "../../../../public/static/HomePage/SwiperPrev.svg";
import Image from 'next/image';


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>  <Image src={ArrowPrev} alt="Logo" />  </button>
      <button onClick={() => swiper.slideNext()}>  <Image src={ArrowPrev} alt="Logo" />  </button>
    </div>
  );
};