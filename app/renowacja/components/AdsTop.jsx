// RenovationAdsBottom.js

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

const RenovationAdsBottom = ({ simpleSteps }) => {

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
      <h4 className="RenovationMainHeading h4">{simpleSteps.heading}</h4>
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
          {simpleSteps.steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="RenovationPageInfoParent">
                <div>
                  <img src={step.icon.url} alt={step.icon.alt} width={step.icon.width} height={step.icon.height} />
                  <h6 className="h6-600">{step.bold}</h6>
                  <h6 className="h6">{step.text}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RenovationAdsBottom;
