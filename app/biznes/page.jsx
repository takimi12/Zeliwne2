'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Biznes.module.scss";

const ForBusiness = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/178');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const heading = data?.acf?.heading || "";
  const underHeading = data?.acf?.under_heading || "";

  return (
    <>
      <section className={styles.forBusiness}>
        <div className={styles.forBusinessTitleText}>
          <h3 className={styles.mainHeading}>{heading}</h3>
          <p className={`big-text ${styles.mainParagraph}`}>{underHeading}</p>
        </div>
      </section>

      <section className={styles.businesContentWrapper}>
        {data?.acf?.asymetric.map((item) => (
          <div className={styles.contentWrapper} key={item.photo.ID}>
            <div className={styles.imageContent}>
              <img
                className={styles.image}
                src={item.photo.url}
                alt={item.title}
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.textContentInner}>
                <h4 className={styles.textContentHeading}>{item.title}</h4>
                <p className={`p-15 ${styles.textContentParagraph}`}>{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ForBusiness;
