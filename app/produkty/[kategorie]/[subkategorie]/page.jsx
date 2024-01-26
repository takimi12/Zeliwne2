'use client';
import React, { useEffect, useState } from "react";
import styles from "./Subkategorie.module.scss";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Series from "@/app/components/series/series";

const ProductOneCategorySub = () => {
  const [categories, setCategories] = useState(null);
  const [mappedCategories, setMappedCategories] = useState(null);
  const [lastSegment, setLastSegment] = useState(null);
  const [secondCategories, setsecondCategories] = useState(null);
  const [test, setTest] = useState(null);

  console.log(test, 'test')

console.log(mappedCategories, 'mappedCategories')
 
  const namesArray = (secondCategories && secondCategories.flatMap(item => item.categories) || []).slice(0, 2).map(item => item.name);
  const [firstIndex, secondIndex] = namesArray;

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment3 = segments[segments.length - 3];
  let lastSegment2 = segments[segments.length - 2];
  let lastSegment1 = segments[segments.length - 1];

  useEffect(() => {
    const currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(segment => segment !== '');
    let lastSegment = segments[segments.length - 1].toLowerCase();
    setLastSegment(lastSegment);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!lastSegment ) {
          return;
        }
//        const response = await fetch("https://grzejniki2.ergotree.pl/wp-json/wc/v3/products?category=16&per_page=100", {

        const response = await fetch("https://grzejniki2.ergotree.pl/wp-json/wc/v3/products?per_page=100", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();
        setTest(result);

        const filteredCategories = result.filter(product => {
          const isIronRadiators = product.categories.some(category => category.id == lastSegment);
          return isIronRadiators;
        });

        const filteredByLastSegment = result
        .filter(product => product.categories.some(category => category.id == lastSegment))
        .map(category => ({ categories: category.categories }))
        .filter(item => item.categories.some(category => category.id == lastSegment));
      
      setsecondCategories(filteredByLastSegment);
      

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
  <section className={styles.breadcrumbs}>
 <Breadcrumbs lastSegment3={lastSegment3} lastSegment2={lastSegment2} firstIndex={firstIndex} secondIndex={secondIndex}  />
   <h4>{firstIndex}</h4>
   </section>
   <section className={styles.sectionProduct}>
   {mappedCategories && mappedCategories.map(mappedCategory => (
    <div className={styles.settingWidth} key={mappedCategory.id}>
  <Link 
    href={`/product/${mappedCategory.id}`}
    key={mappedCategory.name}
  >
    <div>
    {mappedCategory.images.map((image, index) => (
  <div className={styles.categoryImage} key={image.id}>
    {index === 0 && (
      <div className={styles.active}>
        <img src={image.src} alt={image.alt} width={300} height={300} />
      </div>
    )}
    {index !== 0 && (
      <div className={styles.none}>
        <img src={image.src} alt={image.alt} width={300} height={300} />
      </div>
    )}
  </div>
))}
       <p className="p15six">{mappedCategory.name}</p>         
    </div>
  </Link>
  </div>
))}
      
      </section>
      <Series  lastSegment2={lastSegment2} lastSegment1={lastSegment1}/>
    </>
  );
};

export default ProductOneCategorySub;

