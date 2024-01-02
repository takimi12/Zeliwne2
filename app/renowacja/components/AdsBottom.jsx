'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import  slidesData  from "../data/AdsBottomData";
import Image from "next/image";



// Importy...

const RenovationAdsBottom = ({ benefits }) => {

  const breakpoints = {
    600: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">  </span>';
    },
  };

  return (
    <section className="RenovationPageInfoAdvantages">
      <h4 className="RenovationMainHeading h4">Odnów swoje grzejniki w 4 prostych krokach</h4>
      <div className="RenovationPageInfoParentWrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={breakpoints}
        >
          {benefits.benefits_repeater.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="RenovationPageInfoParent">
                <div>
                  <Image src={benefit.benefit_icons.url} alt={benefit.under_icon} width={65} height={64} />
                  <h6 className="h6-600">{benefit.under_icon}</h6>
                  {/* Dodaj więcej pól, jeśli są potrzebne */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RenovationAdsBottom;
