import React from 'react';
import Link from 'next/link';
import prev from '../../../public/static/Header/Basic-icons.svg';
import styles from './Breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

function Breadcrumbs({ lastSegment, lastSegmentProp, lastSegment1, lastSegment2, lastSegment3, firstIndex, secondIndex }) {
  // Combine lastSegment, lastSegmentProp, and lastSegment1 into one array
  const pathnames = [lastSegment, lastSegmentProp, lastSegment1, lastSegment3].filter(Boolean);

  return (
    <section className={styles.sectionBreadcrumbs}>
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
                <Image src={prev} />
              </span>
              <p className={`p13 ${styles.color}`}>
                <Link className={styles.color} href={routeTo}>
                  {name}
                </Link>
              </p>
            
              {firstIndex !== undefined && secondIndex !== undefined && (
                <React.Fragment>
                  <span className={styles.breadcrumb}>
                    <Image src={prev} />
                  </span>
                  <p className={`p13 ${styles.color}`}>
                    {/* Assuming lastSegment2 is a string representing the URL */}
                    <Link className={styles.color} href={`/produkty/${lastSegment2}`}>
                      {secondIndex}
                    </Link>
                  </p>
                  <span className={styles.breadcrumb}>
                    <Image src={prev} />
                  </span>
                  <p className={`p13 ${styles.color}`}>
                    {/* Assuming firstIndex is a string representing the URL */}
                    <Link className={styles.color} href={firstIndex}>
                      {firstIndex}
                    </Link>
                  </p>
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Breadcrumbs;
