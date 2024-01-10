"use client";
import React, { useEffect, useState } from "react";
import styles from "./Subkategorie.module.scss";
import Image from "next/image";
import Series from "../../components/series/series";
import Link from "next/link";

const ProductOneCategorySub = () => {
  const [categories, setCategories] = useState(null);

  console.log(categories)

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment = segments[segments.length - 1].toLowerCase();


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Sprawdź, czy lastSegment ma wartość
        if (lastSegment) {
          const response = await fetch("https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
            },
          });
          const result = await response.json();
          
          // Filtruj kategorie, które mają parent równy 0
          const filteredCategories = result.filter(category => category.parent == lastSegment);
          
          setCategories(filteredCategories);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Wywołaj fetchData tylko jeśli lastSegment ma wartość
    if (lastSegment) {
      fetchData();
    }
  }, [lastSegment]);

  return (
    <>
  {categories &&
        categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            {/* Additional information or links can be added here */}
            <p>{category.description}</p>
            {category.image && (
              <Link 
             
              href={`/produkty/${[lastSegment]}/${category.id}`}
              >
                <img
                  src={category.image.src}
                  alt={category.image.alt || ""}
                  width={100}
                  height={100}
                />
              </Link>
          
            )}
          </div>
        ))}
        <Series />
    </>
  );
};

export default ProductOneCategorySub;
