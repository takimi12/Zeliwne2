"use client";
import React, { useEffect, useState } from 'react';
import Hero from './Hero/page';
import Most from './MostPopular/page';
import Inspiration from './Inspiration/page';
import Box from './FutureSection/page';
import Renovation from './Renovation/page';
import Opinion from './Opinion/page';
import Featured from './Featured/page';

const HomeLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/17');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null; // or loading indicator
  }

  const { acf } = data;

  return (
    <>
      <Hero data1={acf.hero} />
      <Most data={acf.most} />
      <Inspiration data={acf.inspirations} />
      <Box data={acf.box} />
      <Renovation data={acf.image_with_text} />
      <Opinion data={acf.opinion} />
      <Featured data={acf.last_block_homepage} />
    </>
  );
};

export default HomeLayout;
