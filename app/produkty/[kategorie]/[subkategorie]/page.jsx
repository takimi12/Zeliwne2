'use client';
import React, { useEffect, useState } from "react";
import styles from "./Subkategorie.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProductOneCategorySub = () => {
  const [categories, setCategories] = useState(null);
  const [mappedCategories, setMappedCategories] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);

  console.log(categories, 'categories')


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
          // Jeśli lastSegment nie został przekazany, nie wykonuj żadnych operacji
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

        // Odfiltrowanie produktów z kategorii "Grzejniki żeliwne"
        const filteredCategories = result.filter(product => {
          // Sprawdzenie, czy produkt należy do kategorii o ID równym 16
          const isIronRadiators = product.categories.some(category => category.id == lastSegment);
          return isIronRadiators;
        });

        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lastSegment]);

  useEffect(() => {
    if (categories) {
      const mapped = categories.map(category => {
        const imagesLength = category.images.length;
        return {
          name: category.name,
          id: category.id,
          images: category.images.slice(imagesLength - 2, imagesLength)
        };
      });
      setMappedCategories(mapped);
    }
  }, [categories, lastSegment]);

  return (
    <>
      {mappedCategories && mappedCategories.map(mappedCategory => (
        <Link 
        href={`/product/${mappedCategory.id}`}
        >
        <div key={mappedCategory.name}>
           <p>{mappedCategory.id}</p>
          <h2>{mappedCategory.name}</h2>
          
          {mappedCategory.images.map(image => (
            <React.Fragment key={image.id}>
              <img src={image.src} alt={image.alt} width={300} height={300} />
            </React.Fragment>
          ))}
        
        </div>
        </Link>
      ))}
    </>
  );
};

export default ProductOneCategorySub;
