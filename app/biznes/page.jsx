'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ForBusiness = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/178');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>


      <section className="ForBusiness">
        <div className="ForBusinessTitleText">
          <h3 className="MainHeading h3">Oferta dla biznesu</h3>
          <p className="MainParagraph big-text">Are incentivize speed point social beforehand marginalised. Hill unpack breakout disband price get eco-system. Anyway food adoption before shelf-ware meeting driver's today.</p>
        </div>
      </section>

      <div className="BusinesContentWrapper">
        {data?.acf?.asymetric.map((item, index) => (
            <>
          <div className="ImageContent" key={index}>
            <Image
              className="Image"
              src={item.photo.url}
              alt={item.title}
              width={item.photo.width}
              height={item.photo.height}
            />
          </div>
          <div className="TextContent" key={index}>
            <div className="TextContentInner">
              <h4 className="TextConentHeading h4">{item.title}</h4>
              <h6 className="TextConentParagraph h6">{item.paragraph}</h6>
            </div>
          </div>
            </>
        ))}
      </div>
    </>
  );
};

export default ForBusiness;
