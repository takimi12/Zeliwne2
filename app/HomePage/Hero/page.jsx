import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ data1 }) => {

  if (!data1 || !data1 || data1.length === 0) {
    return null;
  }

  // Dynamiczne style
  const heroStyle = {
    backgroundImage: `url("${data1[0].image.url}")`,
    // Dodaj inne style według potrzeb
  };

  return (
    <>
      {data1.map((heroItem, index) => (
        <section key={index} className={styles.hero} style={heroStyle}>
          <div className={styles.textCenter}>
            <div className={styles.textCenterSetting}>
              <span className="eyebrowheader">{heroItem.small_title}</span>
              <h1 className={styles.displaySecond}>{heroItem.title}</h1>
              <button
                className="button h6-500"
                onClick={() => window.location.href = heroItem.link.url}
              >
                {heroItem.link.title}
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Hero;
