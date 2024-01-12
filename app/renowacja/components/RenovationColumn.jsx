// RenovationColumn.js

import React from "react";
import Image from "next/image";

const RenovationColumn = ({ heroData }) => {
  const { image, title, paragraph, button } = heroData;

  console.log(heroData, "heroData")
  return (
    <>
      <section className="RenovationPage">
        <div className="RenovationColumWrapper">
          <div className="RenovationPageText">
            <div className="InnerWrapper">
              <h2 className="display">{title}</h2>
              <div className="RenovationPageParagraph">
                <h6 className="h6">{paragraph}</h6>
              </div>
              <a href={button.url}>
                <button type="button" className="button-text-big">
                  {button.title}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="RenovationColumWrapper">
          <img
            className="RenovationImage"
            src={image.url}
          />
        </div>
      </section>
    </>
  );
};

export default RenovationColumn;
