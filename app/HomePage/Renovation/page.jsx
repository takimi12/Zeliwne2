import React from "react";
import Image from "next/image";

const RenovationSection = ({ data }) => {
  const {
    small_title,
    title,
    description,
    link,
    image: { url, alt, sizes },
  } = data;

  return (
    <section className="RenovationSection">
      <div className="RenovationSection-content">
        <div className="RenovationSection-text">
          <div className="RenovationSection-title">
            <span className="body-small-bigger">{small_title}</span>
          </div>
          <h6 className="RenovationSection-heading display">{title}</h6>
          <div className="RenovationSection-description h6-300">{description}</div>
          <a href={link.url} target={link.target} rel="noopener noreferrer">
            <button className="RenovationSection-button button" type="button">
              {link.title}
            </button>
          </a>
        </div>
        <div className="RenovationSection-image">
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
