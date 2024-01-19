'use client';
import React from "react";
import Image from "next/image";
import styles from "./RenovationProces.module.scss";

const RenovationProces = ({ proces }) => {
  const { title, process_steps } = proces;

  return (
    <>
      <section className={styles.renovationPageInfo}>
        <h4 className={styles.heading}>{title}</h4>
        <div className={styles.colWrapper}>
          {process_steps.map((step, index) => (
            <div className={styles.col6} key={index}>
              <div className={styles.foto}>
                <img className={styles.photoSection} 
                src={step.process_image.url} 
                alt="leeerob"
                fill={true}
                />
              </div>
              <div className={styles.text}>
                <div className={styles.innerText}>
                  <p className="p138" >{step.step}</p>
                  <h5>{step.step_title}</h5>
                  <p className="p15" >{step.step_text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RenovationProces;
