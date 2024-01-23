'use client';
import React, { useEffect, useState } from 'react';
import styles from './Produkty.module.scss';
import Link from 'next/link';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

const Products = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grzejniki2.ergotree.pl/wp-json/wc/v3/products/categories?per_page=100', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();
        // Filter categories where parent is equal to 0 and exclude "Bez kategorii"
        const filteredCategories = result.filter(category => category.parent === 0 && category.name !== "Bez kategorii");
        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment = segments[segments.length - 1];

  return (
    <>
      <section className={styles.breadcrumbs}>
        <Breadcrumbs lastSegment={lastSegment} />
        <h4> Produkty </h4>
      </section>
      <section className={styles.sectionProduct}>
        {categories && categories.map(category => (
          <div className={styles.productsWrapper} key={category.id}>
            <Link href={`/Produkty/${category.id}`}>
              {category.image && category.image.src && (
                <img src={category.image.src} alt={category.image.alt} className={styles.categoryImage} />
              )}
              <p className='p15six'>{category.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
