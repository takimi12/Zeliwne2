"use client";

import React, { useEffect, useState } from "react";
import Hero from "./components/RenovationColumn";
import SimpleSteps from "./components/AdsTop";
import Proces from "./components/RenovationProces";
import Benefits from "./components/AdsBottom";
import Form from "./components/Form";

const Renovation = () => {
  const [data, setData] = useState(null);

  console.log(data, 'data');


  useEffect(() => {
    const fetchData = async () => {
      try {
     

        const response = await fetch(`https://grzejniki2.ergotree.pl/wp-json/wp/v2/pages/109`, {
          method: 'GET',
      
        });
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
      {data && (
        <>
          <Hero heroData={data.acf.hero} />
          <SimpleSteps simpleSteps={data.acf.simple_steps} />
          <Proces proces={data.acf.process} />
          <Benefits benefits={data.acf.benefits}/>
          <Form />
        </>
      )}
    </>
  );
};

export default Renovation;
