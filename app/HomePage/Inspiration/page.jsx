'use client';

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import SwiperNav from "@/app/components/series/SwiperNav";
import styles from "./Inspiration.module.scss";
import Plus from "@/public/static/Inspiration/Plus.jsx";

const SectionSwiper = ({data}) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isBottomSectionExpanded, setIsBottomSectionExpanded] = useState(false);
  const [isConfigurationClicked, setIsConfigurationClicked] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleReachEnd = () => {
    setIsAtBeginning(false);
    setIsAtEnd(true);
  };

  const handleReachBeginning = () => {
    setIsAtBeginning(true);
    setIsAtEnd(false);
  };


  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedSlideIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleConfigurationClick = () => {
    setIsConfigurationClicked(true);
    setIsBottomSectionExpanded((prevState) => !prevState);
    const buttonText = isBottomSectionExpanded ? "Konfiguracja" : "Zwiń";
    document.querySelector(".clickunder900").textContent = buttonText;

    if (popupRef.current) {
      if (!isBottomSectionExpanded) {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup && isBottomSectionExpanded) {
      if (popupRef.current) {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [showPopup, isBottomSectionExpanded]);

  return (
    <>
      <section className={styles.swiperSectionInspiration}>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          className={styles.swiper}
          wrapperClass={styles.wrapperClass}
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBeginning}
      
        >
          <div className={styles.swiperTop}>
            <h4 className="h4">Inspiracje</h4>
            <div className="arrowParent">
            <SwiperNav  first={isAtBeginning} last={isAtEnd}/> 
          </div>
          </div>
          {[...data, data[0], data[1]].map((inspiration, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.hoverEffectDiv} onClick={() => handleImageClick(inspiration.image, index)}>
                <img
                  src={inspiration.image.link}
                  alt={inspiration.image.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.hoverEffectDivInner}>
                  <Plus />
                  <h5 className={styles.Look}>Zobacz</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showPopup && (
          <div ref={popupRef} className={styles.popupOverlay} onClick={closePopup}>
            <div className={styles.popup} onClick={handlePopupClick}>
              <Swiper
                slidesPerView={1}
                loop={true} 
                initialSlide={selectedSlideIndex + 1}
                onSlideChange={(swiper) => {
                  const currentIndex = swiper.activeIndex;
                  const lastIndex = swiper.slides.length - 2;

                  if (currentIndex === lastIndex) {
                    swiper.slideTo(1, 0, false);
                  }
                }}
              >
                {[...data, data[0], data[1]].map((inspiration, index) => (
                  <SwiperSlide  className={styles.slide} key={index}>
                    <div className={styles.imageSection}>
                      <img src={inspiration.image.link} alt={inspiration.image.title} 
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={`${styles.info} ${isBottomSectionExpanded ? 'expanded' : ''}`}>
                 
                      <div className={styles.topInfoSection}>
                      <div className="buttoninnerWrapper">
              <button className={styles.closeButton} onClick={closePopup}>
                X
              </button>
            </div>
                        <h5 className="h5">{inspiration.title}</h5>
                        <p className="p-13">Ilość kolumn:{inspiration.count_column}</p>
                        <p className="p-13">Wysokość:{inspiration.height}</p>
                      
                      </div>
                      <div className={styles.bottomInfoSection}>
                        <p className={`p15six ${styles.firstParagraph}`}>Konfiguracja ze zdjęcia</p>
                        {inspiration.config.map((item, subIndex) => (
                          <div className="bottoInfosecttionText" key={subIndex}>
                            <div className={styles.photoWithText}>
                              <div className={styles.photo}>
                                <img src={item.image.url} alt={item.image.alt}
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="text">
                                <p className="body-small-bigger-third">{item.subtitle}</p>
                                <p className="body-small-smaller-third">{item.value}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className>
                        <button><a href="#">Zobacz produkt</a></button>
                      </div>
                      <div className={styles.configurationUnder900} onClick={handleConfigurationClick}>
                        <h6 className="h6-600 clickunder900">
                          {isConfigurationClicked ? "Zwiń" : "Konfiguracja"}
                        </h6>
                        {/* <img className="popuparrow" src={arrow} alt="popuparrow" /> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
       
          </div>
        )}
      </section>
    </>
  );
};

export default SectionSwiper;
