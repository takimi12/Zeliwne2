'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import kaloryfer from '../../public/static/Header/navikaloryfer.svg';
import Logo from '../../public/static/Header/Logo.jsx';
import SecondLogo from '../../public/static/Header/logogreen.svg';
import { useRouter } from 'next/navigation';
// Separate component for API call and data fetching
const Header = () => {
  const [categories, setCategories] = useState(null);


  const [isScrolled, setIsScrolled] = useState(0);
  const [headerclass, setheaderclass] = useState(0);

  // ... existing code ...

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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


  const [elementMenu, setElementMenu] = useState(null);
  const [elementMenu1, setElementMenu1] = useState(null);
  const [elementMenu2, setElementMenu2] = useState(null);
  const [LogoImage, setLogoImage] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(segment => segment !== '');



    if (segments.includes('produkty') || segments.includes('renowacja') || segments.includes('Opinie') || segments.includes('kontakt')|| segments.includes('product')) {
      setLogoImage(275);
    } 
    if (segments.includes('produkty') && segments.length === 3) {
      // Obsługa przypadku "produkty"
      setLogoImage(0);
    } 

  }, [window.location.pathname]);


  const filteredCategories = categories && categories.filter(category => category.title !== 'Kontakt');
  const kontaktCategory = categories && categories.find(category => category.title === 'Kontakt');
  const router = useRouter();




  let headerParentClasses = `${styles.headerParent} ${isScrolled ? styles.scroll : ''}`;

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  if (  segments.includes('renowacja') || segments.includes('Opinie') || segments.includes('kontakt') || segments.includes('product')) {
    headerParentClasses = `${styles.headerParent1} `;

  }

  if (segments.includes('produkty') && segments.length === 2) {
    // Obsługa przypadku "produkty"
    headerParentClasses = `${styles.headerParent1} `;
  } 
  if (segments.includes('produkty') && segments.length === 1) {
    // Obsługa przypadku "produkty"
    headerParentClasses = `${styles.headerParent1} `;
  } 

  



  const MouseEnterElementMenu = (product_id) => {
    setElementMenu(product_id);
    setElementMenu1(product_id);
    setElementMenu2(null);
    setheaderclass(1);

  };
  const MouseLeave = () => {
    setElementMenu(null);
    setElementMenu1(null);
    setElementMenu2(null);
    setheaderclass(0);
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
<header
 onMouseLeave={MouseLeave}
className={`${headerParentClasses} ${elementMenu == 275 ? styles.activeHeader : headerParentClasses}`} >


    <div className={(isScrolled ? styles.mainWrapper: styles.mainWrapperScroll)}

    >
    {LogoImage || isScrolled || elementMenu == 275  ? 
   (
    <div onMouseEnter={() => setElementMenu(0)}>
      <Image
      
      src={SecondLogo} alt="Logo" 

      />
    </div>
    ) : (
    <div>
      <Image src={Logo} alt="Logo" 

      />
    </div>
    )}
    <div className={styles.header}>
      
      <ul className={styles.menu}>
      {filteredCategories &&
            filteredCategories.map((category) => (
              <li key={category.title}>
                  <Link
                  className={ isScrolled || elementMenu == 275 ? styles.second : '' }
                  onMouseEnter={() => MouseEnterElementMenu(category.product_id,)}
                    
                   href={category.url}>
                    
                   
                    
                      {category.title}
                    
                  </Link>
              </li>
            ))}
      </ul>

      {/* Separate rendering for "Kontakt" category */}
      {kontaktCategory && (
        <div className={styles.menu}>
          <Link href={kontaktCategory.url}
                  className={ isScrolled || elementMenu == 275 ? styles.second : '' }
          >
            
              {kontaktCategory.title}
            
          </Link>
        </div>
      )}
    </div>
    {elementMenu == 275 && (
    <div className={`${styles.secondLevel} ${elementMenu == 275 ? styles.active : styles.secondLevel}`}
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
                          className={`${subCategory.product_id} `}
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
)}
</div>
</header>
          </>
  );
};

export default Header;
