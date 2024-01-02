import React from "react";

const Featured = ({ data }) => {
  console.log(data);

  const sectionStyle = {
    backgroundImage: `url(${data.background.url})`,
    backgroundSize: 'cover',
  };

  return (
    <section className="Featured" style={sectionStyle}>
      <div className="text-center-setting">
        <h3 className="display-second">{data.title}</h3>
        <button className="button">
          <a href={data.link.url} target={data.link.target}>
            {data.link.title}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Featured;
