'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Series from "../../components/series/series";
import styles from './Produkt.module.scss';
import Image from "next/image";
import Box from "../components/Box";
import Advantages from "../components/Advantages";

import { SwiperPrev } from "@/app/components/swiper/swiperPrev";
import { SwiperNext } from "@/app/components/swiper/swiperNext";

import car from "../../../public/static/ProductPage/cardeliver.svg";
import telephone from "../../../public/static/ProductPage/telephonepage.svg";
import post from "../../../public/static/ProductPage/postproductpage.svg";


const ProductPageSingle = () => {
  const [products, setProducts] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

 

  useEffect(() => {
    const currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(segment => segment !== '');
    let lastSegment = segments[segments.length - 1].toLowerCase();
    setLastSegment(lastSegment);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!lastSegment) {
          return;
        }

        const response = await fetch(`https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/${lastSegment}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();
        setTotalSlides(result.images ? result.images.length : 0);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lastSegment]);






  const getAddonValue = (metaData) => {
    const addonMeta = metaData.find(meta => meta.key === 'addon');
    return addonMeta ? addonMeta.value : 'Brak informacji o addonie';
  };
  const getMetaValue = (metaData, key) => {
    const metaItem = metaData.find(meta => meta.key === key);
    return metaItem ? metaItem.value : '';
  };

  return (
    <>
      <section className={styles.productSection}>
        {products && (
          <>
            {isMobile ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className={`${styles.swiper} mySwiper`}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              >
                {products.images && products.images.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <img src={image.src} alt={image.alt} width={200} height={200} />
                  </SwiperSlide>
                ))}
                <div className={styles.pageNumber}>
                  <div className={currentSlide === 0 ? `${styles.unactive}` : ''}>
                    <SwiperPrev  />
                  </div>
                  <div className={styles.slideInfo}>
                    <p>{` ${currentSlide + 1} / ${totalSlides}`}</p>
                  </div>
                  <div className={currentSlide === totalSlides - 1 ? `${styles.unactive}` : ''}>
                    <SwiperNext  />
                  </div>
                </div>
              </Swiper>
            ) : (
              <div className={styles.leftSection}>
                {products.images && products.images.map((image, index, array) => (
                  index < array.length - 2 ? (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={200}
                    />
                  ) : null
                ))}
                {products.images && (
                  <div className={`${styles.lastSecond}`}>
                    {products.images.slice(-2).map((image, index) => (
                      <img
                        key={products.images.length - 2 + index}
                        src={image.src}
                        alt={image.alt}
                        width={200}
                        height={200}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className={styles.rightSection}>
              <div className={styles.sticky} key={products.id}>
                <div className={styles.rightTitle}>
                  <h1>{getMetaValue(products.meta_data, 'tytul_na_strone_produktu')}</h1>
                  <p className="p15-six">{getAddonValue(products.meta_data)}</p>
                </div>
                <div className={styles.shortDesc}>
                  <p>{getMetaValue(products.meta_data, 'short_description')}</p>
                </div>

                <div className={styles.height}>
                  {products.attributes && products.attributes.map(attribute => (
                    <div key={attribute.id}>
                      <p>{attribute.name}:</p>
                      <div className={styles.wrapperHeight}>
                        {attribute.options.map(option => (
                          <div className={styles.availableHeight} key={option}>
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <h4>{getMetaValue(products.meta_data, 'dopis_przy_cenie')}</h4>

                <div className={styles.buttonWrapper}>
                  <button type="button" data-button="true">
                    <span className="button-text-big">Skontaktuj się</span>
                  </button>
                </div>

                <div className={styles.time}>
                  <Image width={30} height={30} src={car} alt="Logo" />
                  <p className="body-small-smaller-second">Dostawa: 6 - 8 tygodni</p>
                </div>

                <div className={styles.wrapperDelivery}>
                  <div className={styles.delivery}>
                    <Image width={20} height={20} src={telephone} alt="Logo" />
                    <p className="body-small-smaller-second">123123123</p>
                  </div>
                  <div className={styles.delivery}>
                    <Image width={20} height={20} src={post} alt="Logo" />
                    <p className="body-small-smaller-second">test@test.pl</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
<Advantages lastSegment={lastSegment} />


 
<Series  />
    </>
  );
};

export default ProductPageSingle;


