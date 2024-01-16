'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ForBusiness = () => {
  const [data, setData] = useState(null);

  console.log(data, 'biznes');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/178');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const heading = data?.acf?.heading || "";
  const underHeading = data?.acf?.under_heading || "";


  return (
    <>


      <section className="ForBusiness">
        <div className="ForBusinessTitleText">
         <h3 className="MainHeading h3">{heading}</h3>
          <p className="MainParagraph big-text">{underHeading}</p>
          
           </div>
      </section>

      <div className="BusinesContentWrapper">
        {data?.acf?.asymetric.map((item, index) => (
            <div className="ContentWrapper">
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
            </div>
        ))}
      </div>
    </>
  );
};

export default ForBusiness;
