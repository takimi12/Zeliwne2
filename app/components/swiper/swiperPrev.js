'use client';
import React from 'react';
import { useSwiper } from 'swiper/react';
import ArrowNext from "../../../public/static/ProductPage/next.svg";
import ArrowPrev from "../../../public/static/ProductPage/prev.svg";
import Image from 'next/image';
import styles from './Swiper.module.scss';


export const SwiperPrev = () => {
  const swiper = useSwiper();

  return (
    <>
      <p className={styles.prev} onClick={() => swiper.slidePrev()}><Image src={ArrowPrev} /></p>
       </>
  );
};