'use client';

import React, { useEffect, useState } from "react";
import styles from "./Subkategorie.module.scss";
import Image from "next/image";

const ProductOneCategorySub = () => {
  const [categories, setCategories] = useState(null);
  const [currentCategoryArray, setCurrentCategoryArray] = useState([]);

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment2 = segments[segments.length - 2].toLowerCase();
  let lastSegment1 = segments[segments.length - 1].toLowerCase();


  console.log(categories, 'categories')
  console.log(currentCategoryArray, 'currentCategoryArray');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1436`
        );
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [lastSegment2]);

  useEffect(() => {
    if (categories && categories.acf) {
      // Wymień "zeliwne" na dowolną inną kategorię, którą chcesz obsłużyć
      const currentCategory = categories.acf[lastSegment2];
      
      if (currentCategory && Array.isArray(currentCategory)) {
        const newCategoryArray = [];

        currentCategory.forEach(categoryItem => {
          // Tutaj obsługuj różne pola dla danej kategorii
          // Przykład: "emmeline", "vulcan", "lazienkowe", itp.
          if (categoryItem[lastSegment1] && Array.isArray(categoryItem[lastSegment1])) {
            newCategoryArray.push(
              ...categoryItem[lastSegment1].map(emmelineItem => ({
                tytul: emmelineItem.tytul,
                obrazek: emmelineItem.obrazek,
              }))
            );
          }
          // Dodaj warunki dla innych pól w danej kategorii

          // ...
        });

        setCurrentCategoryArray(newCategoryArray);
      }
    }
  }, [categories]);

  // Tutaj możesz użyć zmiennych currentCategoryArray i categories do renderowania komponentu

  return (
    <>
{currentCategoryArray.map((item, index) => (
        <div key={index} className="use-client">
          <h2>{item.tytul}</h2>
          <Image src={item.obrazek} alt={item.tytul}
          width={300}
          height={300}
          />
        </div>
      ))}
    </>
  );
};

export default ProductOneCategorySub;
