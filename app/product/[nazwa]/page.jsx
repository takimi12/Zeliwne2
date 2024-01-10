'use client';
import React, { useState, useEffect } from "react";
import Series from "../../components/series/series";
import styles from './Produkt.module.scss';
import Image from "next/image";
import Box from "../components/Box";

const ProductPageSingle = () => {
  const [products, setProducts] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);

  console.log(products, 'products');

  useEffect(() => {
    const currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(segment => segment !== '');
    let lastSegment = segments[segments.length - 1].toLowerCase();
    setLastSegment(lastSegment);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!lastSegment) {
          return;
        }

        const response = await fetch("https://grzejniki2.ergotree.pl/wp-json/wc/v3/products?per_page=100", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();

        const filteredProducts = result.filter(product => product.id == lastSegment);

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lastSegment]);

  return (
    <>
      {products && products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Category: {product.categories && product.categories.map(category => category.name).join(', ')}</p>
          <p>Attributes:</p>
          <ul>
            {product.attributes && product.attributes.map(attribute => (
              <li key={attribute.id}>
                {attribute.name}: {attribute.options && attribute.options.join(', ')}
              </li>
            ))}
          </ul>
          <p>Images:</p>
          <div>
            {product.images && product.images.map(image => (
              <div key={image.id}>
                <img src={image.src} alt={image.alt} width={200} height={200} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductPageSingle;
