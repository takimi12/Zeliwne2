'use client';

// Products.js
import React, { useEffect, useState } from 'react';
import  Link  from 'next/link';
import styles from './Produkty.module.scss';

const Products = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/1402');
        const result = await response.json();
        setCategories(result.acf.kategorie);
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
        {categories &&
  categories.map((category, index) => (
    <Link href={`/produkty/${category.link}`}
    className={styles.produkty}
    >
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
