'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [categories, setCategories] = useState(null);




  console.log(categories, 'categories heder');



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
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('grzejniki2.ergotree.pl/wp-json/wp/v2/pages/1937');
  //       const result = await response.json();
  //       setCategories(result);

  //       // Assuming the additional array is in the result's acf.Menu3[0].produkt
  //       setMenuItems(result.acf.Menu3[0]?.produkt || []);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // // Render loading state if categories or menu3 are not available yet
  // if (!categories) {
  //   return <div>Loading...</div>; // You can replace this with your loading component
  // }

  // const menu = categories.acf.Menu[0];
  // const kontaktMenuItems = menu.item.filter((menuItem) => menuItem.tytul.toLowerCase() === 'kontakt');
  // const otherMenuItems = menu.item.filter((menuItem) => menuItem.tytul.toLowerCase() !== 'kontakt');

  // // Assuming Menu3 is an array with only one item
  // const menu3 = categories.acf.Menu3[0];

  // // Render loading state if menu3 is not available yet
  // if (!menu3) {
  //   return <div>Loading...</div>; // You can replace this with your loading component
  // }

  // const menu3Items = menu3.produkt || [];

  // const handleMouseEnter = (menuItemApi) => {
  //   setActiveMenuItem(menuItemApi);
  // };

  // const handleMouseLeave = () => {
  //   setActiveMenuItem(null);
  // };

  return (
    <>
      {/* <div className={styles.firstLevel}>
        <div className={styles.leftSide}>
          {otherMenuItems.map((menuItem) => (
            <div key={menuItem.tytul}>
              <Link href={menuItem.link}>{menuItem.tytul}</Link>
            </div>
          ))}
        </div>
        <div className={styles.menu}>
          {kontaktMenuItems.map((menuItem) => (
            <div key={menuItem.tytul}>
              <Link href={menuItem.link}>{menuItem.tytul}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bigMenu}>
        <div className={styles.menu3}>
          {menu3Items.map((menuItem) => (
            <div
              className={` ${menuItem.api}`}
              key={menuItem.tytul}
              onMouseEnter={() => handleMouseEnter(menuItem.api)}
            >
              <Link href={menuItem.tytul}>{menuItem.tytul}</Link>
            </div>
          ))}
        </div>
        <div className={styles.menu34}>
          {menu3Items.map((menuItem) => (
            <div className={`${menuItem.api === activeMenuItem ? styles.active : ''} ${styles.menuItemApi2}`} key={menuItem.tytul}>

              {menuItem.menu_3 && (
                <ul className={styles.thirdLevel}>
                  {menuItem.menu_3.map((subItem) => (
                    <li key={subItem.tytul}>
                      {subItem.link ? (
                        <Link href={subItem.link}>{subItem.tytul}</Link>
                      ) : (
                        <span>{subItem.tytul}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default App;
