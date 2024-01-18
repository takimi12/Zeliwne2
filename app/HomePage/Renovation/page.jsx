import React from "react";
import Image from "next/image";
import styles from "./Renovation.module.scss";

const RenovationSection = ({ data }) => {
  const {
    small_title,
    title,
    description,
    link,
    image: { url, alt, sizes },
  } = data;

  return (
    <section className={styles.renovationSection}>
      <div className={styles.renovationSectionContent}>
        <div className={styles.renovationSectionText}>
          <div className={styles.renovationSectionTitle}>
            <p className="p138">{small_title}</p>
          </div>
          <h1 className={`${styles.renovationSectionHeading} h1big`}>{title}</h1>
          <div className={styles.renovationSectionDescription}><p className="p15">{description}</p></div>
          <a href={link.url} target={link.target} rel="noopener noreferrer">
            <button className={`${styles.renovationSectionButton} button`} type="button">
              {link.title}
            </button>
          </a>
        </div>
        <div className={styles.RenovationSectionImage}>
        <img
  src={url}
  alt={alt}
  layout="fill"
  objectFit="cover" // lub inne dostępne wartości
/>
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;
