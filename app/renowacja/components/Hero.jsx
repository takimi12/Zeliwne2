// RenovationColumn.js

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import {Link} from "react-scroll";

const Hero =({ heroData }) => {
  const { image, title, paragraph, button } = heroData;


  return (
    <>
      <section className={styles.renovationPage}>
        <div className={styles.renovationColumWrapper}>
          <div className={styles.renovationPageText}>
            <div className={styles.innerWrapper}>
              <h1 className="h1big">{title}</h1>
              <div className={styles.renovationPageParagraph}>
                <p className="p15">{paragraph}</p>
              </div>
              <Link to="form" spy={true} smooth={true} offset={510} duration={1500} >
                <button type="button" className="button-text-big">
                  {button.title}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.renovationColumWrapper}>
          <img
            className={styles.renovationImage}
            src={image.url}
          />
        </div>
      </section>
    </>
  );
};

export default Hero ;
