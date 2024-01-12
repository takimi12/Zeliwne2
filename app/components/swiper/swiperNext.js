import React from 'react';
import { useSwiper } from 'swiper/react';
import ArrowNext from "../../../public/static/ProductPage/next.svg";
import Image from 'next/image';
import styles from './Swiper.module.scss';


export const SwiperNext = () => {
  const swiper = useSwiper();

  return (
    <>

      <p className={styles.next} onClick={() => swiper.slideNext()}><Image src={ArrowNext} /></p>
      </>
  );
};