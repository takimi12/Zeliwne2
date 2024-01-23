'use client';
import React from "react";
import styles from "./Featured.module.scss";

const Featured = ({ data }) => {


  const sectionStyle = {
    backgroundImage: `url(${data.background.url})`,
    backgroundSize: 'cover',
  };

  return (
    <section className={styles.featured} style={sectionStyle}>
      <div className={styles.textCenterSetting}>
        <h1 className={`${styles.text} h1big`}>{data.title}</h1>
        <button className={styles.button}>
          <a href={data.link.url} target={data.link.target}>
            {data.link.title}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Featured;
