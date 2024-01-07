'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { SwiperNavButtons } from './SwiperNavButtons';
import styles from './Series.module.scss';
import Link from 'next/link';


function Products({onCategoryClick, handleSubCategoryClick, lastSegment2}) {
    const [categories, setCategories] = useState(null);
    const [currentCategoryArray, setCurrentCategoryArray] = useState([]);

    const [newCategories, setnewCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url;

                if (lastSegment2 === undefined) {
                    url = 'https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1402';
                    const response = await fetch(url);
                    const result = await response.json();
                    setnewCategories(result);
                } else {
                    url = 'https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1704';
                    const response = await fetch(url);
                    const result = await response.json();
                    setCategories(result);
                }
                    
           

              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [lastSegment2]);
  
    useEffect(() => {
      if (categories && categories.acf && categories.acf[lastSegment2]) {
        const zeliwneCategories = categories.acf[lastSegment2].reduce((acc, category) => {
          const categoryKeys = Object.keys(category);
          const categoryObjects = categoryKeys.map((key) => ({
            tytul: category[key][0].tytul,
            obrazek: category[key][0].obrazek,
          }));
          return [...acc, ...categoryObjects];
        });
  
        setCurrentCategoryArray(zeliwneCategories);
      }
    }, [categories, lastSegment2]);
  return (
    <section className={styles.products}>

{!lastSegment2 && newCategories && newCategories.acf && newCategories.acf.kategorie && (
  <ul>
    {newCategories.acf.kategorie.map((category, index) => (
      <li key={index}>
        <Link href={`/produkty/${lastSegment2}/${category.link}`}>
          <div>
            <h3>{category.tytul}</h3>
            <img src={category.obrazek} alt={category.tytul} />
          </div>
        </Link>
      </li>
    ))}
  </ul>
)}

{lastSegment2 && currentCategoryArray && Object.keys(currentCategoryArray).length > 0 && (
  <Swiper
    spaceBetween={20}
    slidesPerView={4}
    slidesOffsetBefore={40}
    navigation
    pagination={{ clickable: true }}
  >
    {Object.keys(currentCategoryArray).map((key, index) => (
      <SwiperSlide key={index}>
        <Link
          href={`/produkty/${lastSegment2}/${currentCategoryArray[key][0].tytul}`}
          onClick={() => onCategoryClick(currentCategoryArray[key][0].tytul)}
        >
          <div>
            <h3>{currentCategoryArray[key][0].tytul}</h3>
            <img
              src={currentCategoryArray[key][0].obrazek}
              alt={currentCategoryArray[key][0].tytul}
            />
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
)}

  </section>
  

  
  );
}

export default Products;
