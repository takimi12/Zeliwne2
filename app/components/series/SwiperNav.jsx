// SwiperNav.js
import React from 'react';
import { useSwiper } from 'swiper/react';
import ArrowNext from "../../../public/static/components/Arrowbacj.svg";
import ArrowPrev from "../../../public/static/components/Arrownext.svg";
import Image from 'next/image';
import styles from './Swiper.module.scss';

const SwiperNav = () => {
  const swiper = useSwiper();

  return (
    <>
<Image  onClick={() => swiper.slidePrev()}
width={40} height={40} src={ArrowNext} />
     <Image 
      onClick={() => swiper.slideNext()}
      width={40} height={40} src={ArrowPrev} />
    </>
  );
};

export default SwiperNav;
