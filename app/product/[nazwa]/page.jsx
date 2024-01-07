'use client';

import React, { useState, useEffect } from "react";
import Series from "../../components/series/series";
import styles from './Produkt.module.scss';
import Image from "next/image";

import car from "../../../public/static/ProductPage/cardeliver.svg";
import telephone from "../../../public/static/ProductPage/telephonepage.svg";
import post from "../../../public/static/ProductPage/postproductpage.svg";
import Box from "../components/Box";

const ProductPageSingle = () => {
  const [categories, setCategories] = useState(null);
  const [lastSegment2, setLastSegment2] = useState(null);

  const [box, setBox] = useState(null);


  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment1 = segments[segments.length - 1].toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1858`
        );
        const result = await response.json();
        setCategories(result);
          setBox(result.acf.box);


        // Ustaw wartość apiValue na wartość z categories, jeśli lastSegment istnieje w categories
        if (result && result.acf && result.acf[lastSegment1]) {
          setLastSegment2(result.acf[lastSegment1][0].api);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [lastSegment1]);

  return (
    <>
        <section className={styles.productPage}>
        <div className={styles.productPageWrapper}>
    <div className={styles.imageWrapper}>
    {categories &&
          categories.acf[lastSegment1].map((category, index) => (
              <div className={styles.imageWrapperInner}>
                {category.obrazek.map((image, imageIndex) => (
                  <div className={styles.parentImage} key={imageIndex}>
      <Image
      className={styles.image}
  src={image.obrazek.url}
  width={400}
  height={400}
/>
                  </div>
                ))}
              </div>
          ))}
      </div>
          <div className={styles.infoWrapper}>
          <div className={styles.stickyPosition}>
            
          {categories &&
          categories.acf[lastSegment1].map((category, index) => (
            <div className={styles.mainInfo} key={index}>
              <div className={styles.mainInfoTittle}>
              <h1 className={`h1-smaller ${styles.mainHeading}`}>
              {category.title}</h1>
              <h6 className={`h6-smaller ${styles.mainHeadingsmall}`}> {category.small_title}</h6>
              </div>
              <div className={styles.mainDescParent}>
<h6 className={`h6-300 ${styles.mainDesc}`}
> {category.opis}</h6>
<h6 className="h6-300">Dostępna wysokość</h6>
             
              </div>
              <div>
              <div className={styles.wraperSquare}>

  {category.wysokosc.map((height, heightIndex) => (
    <div key={heightIndex} className={styles.sizeParent}>
      {Object.values(height).map((option, optionIndex) => (
        <h6 key={optionIndex} className={`h6-400-second ${styles.borders}`}>
          {option}
        </h6>
      ))}
    </div>
  ))}
   <div className={styles.mainPrize}> <h4 className="h4">{category.cena}</h4></div>
          <button  type="button" data-button="true">
            <div>
              <span className="button-text-big">Skontaktuj się</span>
            </div>
          </button>
</div>
              </div>
            </div>
          ))}
                  <div>
          
          <div className={styles.contactWrapper}>
          <div className={styles.delivery}>
            <Image src={car} alt="Logo" />
               <p className="body-small-smaller-second">Dostawa: 6 - 8 tygodni</p></div>
          </div>
          <div className={styles.contactDetailsWrapper}>
              <div className={styles.delivery}><Image src={telephone} alt="Logo" />
<p className="body-small-smaller-second">123123123</p></div>
              <div className={styles.delivery}><Image src={post} alt="Logo" /><p className="body-small-smaller-second">test@test.pl</p></div>
            </div>
            </div>
          </div>
          </div>
          </div>
          </section>
        <Box  box={box} />
 
 <section className={styles.special}>
          
          {categories &&
      categories.acf[lastSegment1].map((category, index) => (
        <div className={styles.parent} key={index}>
          {category.bottom_section &&
            category.bottom_section.map((bottomSectionItem, bottomIndex) => (
              <>
              <div className={styles.bottomSectionContent} key={bottomIndex}>
                {/* Displaying the content from bottom_section */}
                <p className="p138">{bottomSectionItem.small_title}</p>
                <h1 className={`h1-big ${styles.mainHeading}`}>{bottomSectionItem.big_tittle}</h1>
                <p className="p15">{bottomSectionItem.description}</p>
                
              
              </div>
                <div className={styles.bottomSectionImage}>
                <Image
                  src={bottomSectionItem.obrazek.url}
                  alt={bottomSectionItem.obrazek.title}
                  width={400}
                  height={300}
                />
              </div>
              </>
            ))}
        </div>
      ))}  
</section>



      <Series lastSegment2={lastSegment2} />
    </>
  );
};

export default ProductPageSingle;
