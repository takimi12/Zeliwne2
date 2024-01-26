import React from 'react';
import Link from 'next/link';
import Prev from '../../../public/static/Header/Prev.jsx';
import styles from './Breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function Breadcrumbs({ lastSegment, lastSegmentProp, lastSegment1, lastSegment2, lastSegment3, firstIndex, secondIndex }) {
  // Combine lastSegment, lastSegmentProp, and lastSegment1 into one array
  const pathnames = [lastSegment, lastSegmentProp, lastSegment1, lastSegment3].filter(Boolean);

  return (

      <div className={styles.locations}>
        <p className={`p13 ${styles.color}`}>
          <Link className={styles.color} href="/">
            Strona Główna
          </Link>
        </p>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={name}>
              <span className={styles.breadcrumb}>
              <Prev />
              </span>
              <p className={`p13 ${styles.color}`}>
                <Link className={styles.color} href={routeTo}>
                  {name}
                </Link>
              </p>
            
              {firstIndex !== undefined && secondIndex !== undefined && (
                <React.Fragment>
                  <span className={styles.breadcrumb}>
                  <Prev />
                  </span>
                  <p className={`p13 ${styles.color}`}>
                    {/* Assuming lastSegment2 is a string representing the URL */}
                    <Link className={styles.color} href={`/Produkty/${lastSegment2}`}>
                      {firstIndex}
                    </Link>
                  </p>
                  <span className={styles.breadcrumb}>
                    <Prev />
                  </span>
                  <p className={`p13 ${styles.color}`}>
                    {/* Assuming firstIndex is a string representing the URL */}
                    <Link className={styles.color} href={firstIndex}>
                      {secondIndex}
                    </Link>
                  </p>
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </div>
   
  );
}

export default Breadcrumbs;
