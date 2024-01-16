"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";


// Import necessary libraries and components
const ClientsOpinion = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/159');
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
      <section className="Opinions">
        <div>
        <div>
        {data && (
          <div className="mainHeading">
            <h3> {data.acf.header}</h3>
            <Image 
            width={100}
            height={100}
            src={`${data.acf.header_stars.url}`}/>
            <p className="average">Średnia ocena: <span>{data.acf.under_stars}</span></p>
            
          </div>
        )}
      </div>
        </div>

        <div className="MainWrapper">
        {data?.acf?.opinions?.map((opinion) => (
            <div key={opinion.number_of_stars} className="WrapperOpinion">
              <div className="WrapperOpinionLeft">
                 <p> {opinion.number_of_stars}</p>
                <h6 className="leftHeading">{opinion.title}</h6>
                <p className="p15"> {opinion.paragraph}</p>
                <p className="p13"> {opinion.signature}<span className="span13"> {opinion.country}</span></p>


              </div>
              <div className="WrapperOpinionRight">
              <Image src={opinion.image.url} alt={opinion.title} width={326} height={325} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ClientsOpinion;
