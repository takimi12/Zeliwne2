import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import first from "../../../public/static/HomePage/first-main-photo.png";
import second from "../../../public/static/HomePage/second-main-photo.png";
import third from "../../../public/static/HomePage/third-main-photo.png";
import fourth from "../../../public/static/HomePage/fourth-main-photo.png";
import five from "../../../public/static/HomePage/five-main-photo.png";
import arrow from "../../../public/static/HomePage/Arrows.png";
import { SwiperNavButtons } from './helpers/SwiperNavButtons.jsx';
import Inspiration from "../../../public/static/HomePage/InspirationPlus.svg";
import Image from "next/image";

const SectionSwiper = ({data}) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isBottomSectionExpanded, setIsBottomSectionExpanded] = useState(false);
  const [isConfigurationClicked, setIsConfigurationClicked] = useState(false);

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
      <section className='swiper-section-inspiration'>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          navigation
          initialSlide={1}
          loop={true} 
          onSlideChange={(swiper) => {
            const currentIndex = swiper.activeIndex;
            const lastIndex = swiper.slides.length - 2;

            if (currentIndex === lastIndex) {
              swiper.slideTo(1, 0, false);
            }
          }}
        >
          <div className='swiper-top'>
            <h4 className="h4">Inspiracje</h4>
          </div>
          {[...data, data[0], data[1]].map((inspiration, index) => (
            <SwiperSlide key={index}>
              <div className='hover-effect-div' onClick={() => handleImageClick(inspiration.image, index)}>
                <Image
                  src={inspiration.image.link}
                  alt={inspiration.image.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className='hover-effect-div-inner'>
                  <Image src={Inspiration} alt="Logo" />
                  <h5 className='Look'>Zobacz</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showPopup && (
          <div ref={popupRef} className="popup-overlay" onClick={closePopup}>
            <div className="popup" onClick={handlePopupClick}>
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
                  <SwiperSlide key={index}>
                    <div className="imageSecition">
                      <Image src={inspiration.image.link} alt={inspiration.image.title} 
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={`info ${isBottomSectionExpanded ? 'expanded' : ''}`}>
                      <div className="TopInfoSection">
                        <h5 className="h5">{inspiration.title}</h5>
                        <p className="body-small-smaller-third">{inspiration.height}</p>
                        <p className="body-small-smaller-third">{inspiration.count_column}</p>
                      </div>
                      <div className="BottomInfoSection">
                        <h3 className="h6-600-third">Konfiguracja ze zdjęcia</h3>
                        {inspiration.config.map((item, subIndex) => (
                          <div className="bottoInfosecttionText" key={subIndex}>
                            <div className="photowithtext">
                              <div className="photo">
                                <Image src={item.image.url} alt={item.image.alt}
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
                      <div className="buttonwraper">
                        <button><a href="#">Zobacz produkt</a></button>
                      </div>
                      <div className="ConfigurationUnder900" onClick={handleConfigurationClick}>
                        <h6 className="h6-600 clickunder900">
                          {isConfigurationClicked ? "Zwiń" : "Konfiguracja"}
                        </h6>
                        <Image className="popuparrow" src={arrow} alt="popuparrow" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="buttoninnerWrapper">
              <button className="close-button" onClick={closePopup}>
                X
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SectionSwiper;
