import React from "react";
import {Image} from "next/image";

const RenovationProces = ({ proces }) => {
  const { title, process_steps } = proces;

  return (
    <>
      <section className="RenovationPageInfo">
        <h4 className="MainSectionHeading h4">{title}</h4>
        <div className="ColWrapper">
          {process_steps.map((step, index) => (
            <div className="col-6" key={index}>
              <div className="foto">
                <Image className="photo-section" 
                src={step.process_image.url} 
                alt={step.process_image.title}
                width={100}
                height={100}
                />
              </div>
              <div className="text">
                <div className="inner-text">
                  <p className="SmallHeading body-small-bigger">{step.step}</p>
                  <h5 className="MainHeading h5">{step.step_title}</h5>
                  <h6 className="h6-400">{step.step_text}</h6>
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
