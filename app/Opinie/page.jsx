"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./Opinion.module.scss";


// Import necessary libraries and components
const ClientsOpinion = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/159');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className={styles.opinions}>
        
        {data && (
          <div className={styles.mainHeading}>
            <h3> {data.acf.header}</h3>
            <img 
            width={100}
            height={100}
            src={`${data.acf.header_stars.url}`}/>
            <p className="p13brown">Średnia ocena: <span>{data.acf.under_stars}</span></p>
            
          </div>
        )}


        <div className={styles.mainWrapper}>
        {data?.acf?.opinions?.map((opinion) => (
            <div key={opinion.number_of_stars} className={styles.wrapperOpinion}>
              <div className={styles.wrapperOpinionLeft}>
                 <p> {opinion.number_of_stars}</p>
                <h6>{opinion.title}</h6>
                <p className={`${styles.middle} p15`}> {opinion.paragraph}</p>
                <p className="p13"> {opinion.signature}<span className="span13"> {opinion.country}</span></p>


              </div>
              <div className={styles.wrapperOpinionRight}>
              <img src={opinion.image.url}  />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ClientsOpinion;
