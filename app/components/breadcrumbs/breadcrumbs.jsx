import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/public/static/Produkt/Subkategorie/HeaderSection.png';
import breadcrumb from '@/public/static/Produkt/breadcrumb.svg';
import styles from './Breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg';

function Breadcrumbs(props) {
  const router = useRouter();
  let pathnames = router.pathname ? router.pathname.split('/').filter((x) => x) : [];

  // Ogranicz pathnames do pierwszych trzech segmentów
  pathnames = pathnames.slice(0, 3);


  const isPropsNotEmpty = props.myProp && props.myProp.length > 0;
  const heroCategorySubClasses = isPropsNotEmpty
    ? `${styles.HeroCategorySub} ${styles.active}`
    : styles.HeroCategorySub;
  const Image = isPropsNotEmpty ? `${styles.image}` : `${styles.none}`;
  const locations = isPropsNotEmpty ? `${styles.locationProp}` : `${styles.location}`;

  return (
    <section className={heroCategorySubClasses}>
      <img className={Image} src={Header} alt="Header" />
      <div className={locations}>
        <p className={`body-small-smaller ${styles.color}`}>
          <Link  className={styles.color} href="/">
            Strona Główna
          </Link>
        </p>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={name}>
              <span className={styles.breadcrumb}>
                <ReactSVG src={breadcrumb} />
              </span>
              <p className={`body-small-smaller ${styles.color}`}>
                <Link className={styles.color} href={routeTo}>
                  {name}
                </Link>
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Breadcrumbs;
