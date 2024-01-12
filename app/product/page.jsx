import React from 'react';
import Layout from './layout';
import ProduktPage from './[nazwa]/page';
import Series from '../../components/series/series';

const Produkt = () => {
 
  return (
    <Layout>
      <ProduktPage  />
      <Series />
    </Layout>
  );
};

export default Produkt;
