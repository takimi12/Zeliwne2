'use client';

// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Subkategorie.module.scss';

// Products component
const Products = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1422');
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className={styles.sectionProduct}>
        <h4 className={styles.title}>Produkty</h4>
        <div className={styles.productsWrapper}>
          {/* Check if categories exist before mapping */}
          {categories && categories.acf.grzejniki_zeliwne.map((category, index) => (
          
              <Link className={styles.produkty} href={`/category/${category.tytul}`}>
        
                  <img src={category.obrazek} alt={category.tytul} />
                  <h5 className={styles.productsWrapperheading}>{category.tytul}</h5>
              </Link>
              ))}
        </div>
      </section>
    </>
  );
}  

export default Products;
