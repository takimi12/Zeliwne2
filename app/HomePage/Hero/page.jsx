import React from "react";

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
    <div>
      {data1.map((heroItem, index) => (
        <div key={index} className="Hero" style={heroStyle}>
          <div className="text-center">
            <div className="text-center-setting">
              <span className="eyebrowheader">{heroItem.small_title}</span>
              <h3 className="display-second">{heroItem.title}</h3>
              <button
                className="button h6-500"
                onClick={() => window.location.href = heroItem.link.url}
              >
                {heroItem.link.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
