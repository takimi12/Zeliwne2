'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import kaloryfer from '../../public/static/Header/navikaloryfer.svg';

// Separate component for API call and data fetching
const App = () => {
  const [categories, setCategories] = useState(null);

  console.log(categories, 'categories');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://grzejniki2.ergotree.pl/wp-json/custom/v1/navigation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('ck_333c63c1676df66d84322191922b725ba3dc7f1e:cs_85c7bc717de01741a71ad8dc9152986569b62cec')
          },
        });
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);






  // Filter out the "Kontakt" category
  const filteredCategories = categories && categories.filter(category => category.title !== 'Kontakt');
  const kontaktCategory = categories && categories.find(category => category.title === 'Kontakt');



  const [elementMenu, setElementMenu] = useState(null);
  const [elementMenu1, setElementMenu1] = useState(null);
  const [elementMenu2, setElementMenu2] = useState(null);

  
console.log(elementMenu1, 'elementMenu')
console.log(elementMenu2, 'elementMenu2')


  const MouseEnterElementMenu = (product_id) => {
    setElementMenu(product_id);
    setElementMenu1(product_id);
    setElementMenu2(null);
  };
  const MouseLeave = () => {
    setElementMenu(null);
    setElementMenu1(null);
    setElementMenu2(null);
  };

  const MouseEnterElementMenu1 = (product_id) => {
    setElementMenu1(product_id);
    setElementMenu2(null);
  };
  const MouseEnterElementMenu2 = (product_id) => {
    setElementMenu2(product_id);
    // Add any other logic you want to execute on mouse enter
  };



  return (
    <>
    <div className={styles.header}>
      <ul className={styles.menu}>
      {filteredCategories &&
            filteredCategories.map((category) => (
              <li key={category.title}>
                  <Link href={category.url}>
                    <p onMouseEnter={() => MouseEnterElementMenu(category.product_id)}
                   
                    >
                      {category.title}
                    </p>
                  </Link>
              </li>
            ))}
      </ul>

      {/* Separate rendering for "Kontakt" category */}
      {kontaktCategory && (
        <div className={styles.kontakt}>
          <Link href={kontaktCategory.url}>
            <p onClick={() => setActiveMenuItem(kontaktCategory.title)}>
              {kontaktCategory.title}
            </p>
          </Link>
        </div>
      )}
    </div>
    <div className={`${styles.secondLevel} ${elementMenu == 275 ? styles.active : styles.secondLevel}`}
     onMouseLeave={MouseLeave}
    >
          <div className={styles.secondLevelbelow}>
            {filteredCategories && filteredCategories.map(category => (
              <div key={category.title}>
                
                {category.children && (
                  <div className={styles.parentSecondLevel}>
                    {category.children.map(subCategory => (
                      <div  key={subCategory.title} >
                        <Link href={subCategory.url}>
                          <p 
                          className={`${subCategory.product_id}`}
                          onMouseEnter={() => MouseEnterElementMenu1(subCategory.product_id)}
                          >
                            {subCategory.title}
                    
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          <div>
         
          
          </div>

          </div>
          <div className={styles.thirdLevelWrapper}>
            {filteredCategories && filteredCategories.map(category => (
              <div key={category.title}>
                
                {category.children && (
                  <div >
                    {category.children.map(subCategory => (
                      <div  key={subCategory.title} >
                    
                 

                            {subCategory.children && (
                              <div className={`${styles.thirdLevel} ${elementMenu1 === subCategory.product_id ? styles.active2 : ''}`}>


                          {subCategory.children.map(thirdLevelCategory => (
                            <div>
                            
                              <Link href={thirdLevelCategory.url}>
                              <p 
      onMouseEnter={() => MouseEnterElementMenu2(thirdLevelCategory.product_id)}
      className={styles.unactive}
    >
                                  {thirdLevelCategory.title}

                                </p>
                              </Link>
                            
                            </div>
                          ))}
                        </div>
                      )}
                        
                   
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>

 
          <div className={styles.headerMenu}>
  {elementMenu2 == null ? (
    <div>
      <Image src={kaloryfer} alt="Kaloryfer" />
    </div>
  ) : (
    <>
      {filteredCategories && filteredCategories.map(category => (
        <li key={category.title}>
          {category.children && (
            <ul>
              {category.children.map(subCategory => (
                <li key={subCategory.title}>
                  {subCategory.children && (
                    <ul>
                      {subCategory.children.map(thirdLevelCategory => (
                        <li className={`${styles.headerImageli} ${elementMenu2 === thirdLevelCategory.product_id ? styles.activeImage : styles.unActiveImage}`}>
                          <img
                            className={styles.headerImage}
                            src={thirdLevelCategory.thumbnail}
                            alt={`Category: ${thirdLevelCategory.title}`}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  )}
</div>
</div>



          </>
  );
};

export default App;
