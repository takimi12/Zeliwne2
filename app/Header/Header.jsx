'use client';

import React, { useState, useEffect } from 'react';
import kaloryfer from "../../public/static/Header/navikaloryfer.svg";
import Elara from "../../public/static/Header/elara.png";
import logo from "../../public/Logo/Logo-dark.png";
import Florence from "../../public/static/Header/gracenavi.png";
import grace from "../../public/static/Header/gracenavi.png";
import rococo from "../../public/static/Header/rococonavi.png";
import emmeline from 
"../../public/static/Header/emmeline.png";
import vulcan from "../../public/static/Header/vulcannavi.png";
import Image from 'next/image';
import Link from 'next/link';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);
  const [isNavigationHovered, setIsNavigationHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isParentHovered, setIsParentHovered] = useState(false);
  const [isCategory1Hovered, setIsCategory1Hovered] = useState(false);
  const [activeSubcategoryIndexes, setActiveSubcategoryIndexes] = useState(Array(categories[0]?.children?.length).fill(false));
  const [activeThirdLevelIndex, setActiveThirdLevelIndex] = useState(-1);
  const [isKaloryferHidden, setIsKaloryferHidden] = useState(false);
  const [contactCategory, setContactCategory] = useState(null);

  const [isSubcategoryParentActive, setIsSubcategoryParentActive] = useState(false);




  const handleCategoryMouseEnter = (index) => {
    setActiveCategoryIndex(index);
    if (index === 0) {
      setIsCategory1Hovered(true);
    } else {
      setIsCategory1Hovered(false);
    }
  };
  
  const handleNavigationMouseLeave = () => {
    if (isCategory1Hovered) {
      setTimeout(() => {
        setIsDropdownHovered(false);        
      }, 300);
      setTimeout(() => {
        setIsCategory1Hovered(false);

        
      }, 500);
    }
  };
  
  const handleLogoMouseLeave = () => {
    setIsCategory1Hovered(false);
  };
  


  const [fetchedData, setFetchedData] = useState([]);

  const [fetchedData1, setFetchedData1] = useState([]);

  console.log(fetchedData1, 'pages');

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://grzejniki.ergotree.pl/wp-json/wc/v2/pages", {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('ck_15872bdeb29da677c9d69ff7f5e7350b07f23f1f:cs_4d0a58972630690a8ff936d143c60e53f8930def'),
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        setFetchedData1(result);
  
        // Reszta Twojego kodu, np. aktualizacja innych stanów...
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };https://grzejniki.ergotree.pl/wp-json/wp/v2/pages/17
  
    fetchData();
  }, []);
    
  
  useEffect(() => {
    fetch("https://et2.ergotree.pl/wp-json/custom/v1/navigation")
      .then((response) => response.json())
      .then((result) => {
        // Odfiltrowanie kategorii "Kontakt" i umieszczenie jej w stanie contactCategory
        const filteredCategories = result.filter((item) => item.title !== "Kontakt");
        setCategories(filteredCategories);
        const contactCategory = result.find((item) => item.title === "Kontakt");
        setContactCategory(contactCategory);

        // Inicjalizacja activeSubcategoryIndexes
        const initialIndexes = Array(filteredCategories[0]?.children?.length).fill(false);
        setActiveSubcategoryIndexes(initialIndexes);
      });
  }, []);
  const [isImageVisible, setIsImageVisible] = useState(true);



const handleSubcategoryMouseEnter = (index) => {
  const updatedIndexes = activeSubcategoryIndexes.map((value, i) => i === index);
  setActiveSubcategoryIndexes(updatedIndexes);
  setActiveThirdLevelIndex(-1);
  setIsParentHovered(true);
  setIsDropdownHovered(true);
  setActiveThirdLevelIndex(0);
  setIsKaloryferHidden(false);
};


const handleThirdLevelMouseEnter = (className) => {
  setActiveThirdLevelIndex(className);
  setIsKaloryferHidden(
    className.includes('third-level-') &&
    className.split('third-level-')[1].length > 0 &&
    !isNaN(Number(className.split('third-level-')[1]))
  );
};


  return (
    <div className='navigation'
    onMouseLeave={handleNavigationMouseLeave}>
    <div className="navigation-left">
      <div className="logo"
          onMouseEnter={handleLogoMouseLeave}>
        <a href="/">
          <Image src={logo} alt="Logo" />
        </a>
      </div>
      <div className={`category-main`}>
        {categories.map((category, index) => (
          <div
            className={`category-${index + 1} ${index === activeCategoryIndex && isDropdownHovered ? 'active' : ''}`}
            key={category.id}
            onMouseEnter={() => handleCategoryMouseEnter(index)}
            onMouseLeave={() => {
              if (!isNavigationHovered) {
                setActiveCategoryIndex(-1);
              }
            }}
          > 
          <Link href={category.title} >
            {category.title}
          </Link>
            
          </div>
        ))}
      </div>
 
    </div>
    <div className="navigation-right">
        {contactCategory && (
        <div
          className={`category-${contactCategory.id} ${activeCategoryIndex === contactCategory.id && isDropdownHovered ? 'active' : ''}`}
          onMouseEnter={() => handleCategoryMouseEnter(contactCategory.id)}
          onMouseLeave={() => {
            if (!isNavigationHovered) {
              setActiveCategoryIndex(-1);
            }
          }}
        >
          {contactCategory.title}
        </div>
      )}
    </div>

      {isCategory1Hovered && (
        <>
  <div className={`subcategory-main-parent-second ${isDropdownHovered ? 'active-slide-down' : 'active-slide-up'}`}>
  
 
            <ul className={`subcategory-main subcategory-main-active ${activeCategoryIndex === 0 ? 'subcategory-main-active' : ''}`}>
              {categories[0]?.children?.map((subcategory, index) => {
                const subcategoryClass = `subcategoryClass subcategoryClass-${index + 1} ${activeSubcategoryIndexes[index] ? 'active' : ''} ${Array.isArray(subcategory.children) && subcategory.children.length > 0 ? 'subcategorysecond-children' : ''}`;

                return (
                  <li
                    className={subcategoryClass}
                    key={subcategory.id}
                    onMouseEnter={() => handleSubcategoryMouseEnter(index)}
                  >
                    {subcategory.title}
                    {Array.isArray(subcategory.children) && subcategory.children.length > 0 && (
                      <ul className={`subsubcategory-main `}>
                        {subcategory.children.map((child, childIndex) => (
                          <li
                            className={`third-level third-level-${index + 1}${childIndex + 1}`}
                            key={child.id}
                            onMouseEnter={() => handleThirdLevelMouseEnter(` third-level-${index + 1}${childIndex + 1}`)}
                          >
                            {child.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          <div className='img-wraper'>
            <div className='inside-wraper'>
              <Image
                className={`Elara Image-left Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-11' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-11')}
                src={Elara}
                alt="Elara"
              />
            <Image
  className={`kaloryfer Image-left Image-left-kaloryfer ${isImageVisible && !isKaloryferHidden ? '' : 'hidden'}`}
  src={kaloryfer}
  alt="kaloryfer"

/>
              <Image
                className={`Florence Image-lef Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-31' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-31')}
                src={Florence}
                alt="Florence"
              />
              <Image
                className={`grace Image-left Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-51' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-51')}
                src={grace}
                alt="grace"
              />
              <Image
                className={`rococo Image-left Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-52' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-52')}
                src={rococo}
                alt="rococo"
              />
              <Image
                className={`Vulkam Image-left Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-53' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-53')}
                src={vulcan}
                alt="vulcan"
              />
              <Image
                className={`Emmeline Image-left Image-left-normal ${isImageVisible && activeThirdLevelIndex === ' third-level-54' ? '' : 'hidden'}`}
                onMouseEnter={() => handleThirdLevelMouseEnter(' third-level-54')}
                src={emmeline}
                alt="emmeline"
              />
            </div>
          </div>
          </div>

        </>
      )}
    </div>
  );
};

export default App;
