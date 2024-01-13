import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import styles from './Series.module.scss';
import Link from 'next/link';
import SwiperNav from './SwiperNav';

function Series({ lastSegment2, seriesProp, prop }) {
  const [categories, setCategories] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        if (lastSegment2 == undefined || null) {
          const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
            },
          });
          const result = await response.json();

          // Filter categories where parent is equal to 0 and exclude "Bez kategorii"
          const filteredCategories = result.filter(category => category.parent === 0 && category.name !== "Bez kategorii");
          setCategories(filteredCategories);
        } else if (lastSegment2) {
          const response = await fetch("https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
            },
          });
          const result = await response.json();

          // Filtruj kategorie, które mają parent równy 0
          const filteredCategories = result.filter(category => category.parent == lastSegment2);
          setCategories(filteredCategories);

          const filteredLastSegment = result.filter(category => category.id == lastSegment2);
          setLastSegment(filteredLastSegment);
        }
      } catch (error) {

      }
    };

    fetchData();
  }, [lastSegment2]);

  return (
    <>
      <section className={styles.products}>
        <div className={styles.product}>
          {categories && (
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              slidesOffsetBefore={40}
              className={styles.swiperClass}
              wrapperClass={styles.wrapperClass}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1199: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <div className={styles.topParent}>
              {prop !== null ? (
  <h4>Kategorie Produktów</h4>
) : (
  <>
    {lastSegment2 == null || lastSegment2 === undefined ? (
      <h4>Pozostałe Kategorie</h4>
    ) : (
      <h4>Pozostałe serie</h4>
    )}
  </>
)}
                <div className={styles.arrowParent}>
                  <SwiperNav />
                </div>
              </div>

              {categories.map((category) => (
                <SwiperSlide key={category.id} className={styles.slide}>
                  <Link href={`/produkty/${category.id}`}>
                    {category.image && category.image.src && (
                      <img
                        src={category.image.src}
                        alt={category.image.alt}
                        className={styles.image}
                      />
                    )}
                    <p className='p15sixx'>{category.name}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}

export default Series;
