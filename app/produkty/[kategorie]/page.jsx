'use client';

import React, { useEffect, useState } from "react";
import styles from "./Subkategorie.module.scss";
import Image from "next/image";
import Series from "../../components/series/series";
import Link from "next/link";

const ProductOneCategorySub = () => {
  const [categories, setCategories] = useState(null);
  const [currentCategoryArray, setCurrentCategoryArray] = useState([]);



  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment = segments[segments.length - 1].toLowerCase();




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1704`
        );
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    // Check if categories and acf.zeliwne exist before processing
    if (categories && categories.acf && categories.acf[lastSegment]) {
      // Extract information from acf.zeliwne and store in currentCategoryArray
      const zeliwneCategories = categories.acf[lastSegment].reduce((acc, category) => {
        const categoryKeys = Object.keys(category);
        const categoryObjects = categoryKeys.map((key) => ({
          tytul: category[key][0].tytul,
          obrazek: category[key][0].obrazek,
        }));
        return [...acc, ...categoryObjects];
      }, []);

      setCurrentCategoryArray(zeliwneCategories);
    }
  }, [categories]);


  return (
    <>
{currentCategoryArray.map((item, index) => (
        <div key={index} className="use-client">
    <Link href={`/produkty/${[lastSegment]}/${item.tytul}`}>
          <Image src={item.obrazek} alt={item.tytul}
          width={300}
          height={300}
          />
                    <h2>{item.tytul}</h2>
                    </Link>
        </div>
      ))}

      <Series />
    </>
  );
};

export default ProductOneCategorySub;
